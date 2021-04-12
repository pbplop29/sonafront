import './GalleryX.css' 
import React, { useEffect, useState } from 'react'
import firebase from "firebase";
import Header from './Header'
import MenuX from './MenuX'
import Gallery from "react-photo-gallery";
import { Lightbox } from "react-modal-image";

var url_stream; //This variable will contain the stream which will bring image URLS. Using a variable makes it possible to cancel the stream easily. 

const GalleryX = () => {

  const [imageUrls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url_for_popup, setUrl] = useState("");
  const [popup, setBool] = useState(false);

  useEffect(() => { 
    //Subscribing to the URL stream that brings URLs in real time such that even if something is changed in the backend, you don't have to refresh
    //the page.
    url_stream = firebase.firestore().collection("stuff").doc("URLS").onSnapshot((doc) => {
      var url_list = []; //This stores the urls that come from firebase.
      for(const [key, value] of Object.entries(doc.data())){ 
	url_list.push({src: value, width: 3, height: 3}); //adjust width height here
      }
      url_list.sort((url1, url2) => {
	return compareObjects(url1, url2, 'src');
      })//We sort the list of URLs such that the images aren't in different position each time you refresh the site. This behavior
      //occurs because firebase fetches fields randomly.
      setUrls(url_list); //Rebuilding the component with all the Urls such that the images show up.
      setLoading(false); //Removing the progress indicator which is shown when the urls are coming from the database.
    });
    return () => {
      url_stream(); //Unsubscribing to the stream once the gallery page is exited. This is to prevent unnecessary use of processing & memory.
    }
  }, []);

  function getIndexOfImage(event, index){
    setUrl(imageUrls[index.index].src); //Gets the url of the image that we clicked on
    setBool(true); //Sets 'popup' true such that popup happens.
  }
  
  function closePopup(){
    setBool(false);
  }
	
  function compareObjects(object1, object2, key){ //sorts the url array according to the url.
    const obj1 = object1[key].toUpperCase()
    const obj2 = object2[key].toUpperCase()
    if (obj1 < obj2){
      return -1
    }
    if (obj1 > obj2){
      return 1
    }
    return 0
  }

  return (
    <div className='gallery__page'>
    <MenuX />
    <Header />
    <div classname='section'>
    <div className="empty__space"></div>
    <div className="gallery__box__dad">
    <div className="gallery__box">
    <div className="gallery__title">
      <h1>Gallery</h1>
    </div>
    
    {!loading && 
	<Gallery photos={imageUrls} onClick={getIndexOfImage}/>
    }
    {popup &&
	<Lightbox small={url_for_popup} large={url_for_popup} onClose={closePopup}/>
    }
    </div>
    </div>
    </div>
    </div>
  )
}

export default GalleryX
