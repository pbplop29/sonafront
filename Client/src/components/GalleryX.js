import './GalleryX.css' 
import React, { useEffect, useState } from 'react'
import firebase from "firebase";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Header from './Header'
import MenuX from './MenuX'

var url_stream; //This variable will contain the stream which will bring image URLS. Using a variable makes it possible to cancel the stream easily. 

const GalleryX = () => {

  const [imageUrls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    //Subscribing to the URL stream that brings URLs in real time such that even if something is changed in the backend, you don't have to refresh
    //the page.
    url_stream = firebase.firestore().collection("stuff").doc("URLS").onSnapshot((doc) => {
      var url_list = []; //This stores the urls that come from firebase.
      for(const [key, value] of Object.entries(doc.data())){ 
	url_list.push(value);
      }
      url_list.sort(); //We sort the list of URLs such that the images aren't in different position each time you refresh the site. This behavior
      //occurs because firebase fetches fields randomly.
      setUrls(url_list); //Rebuilding the component with all the Urls such that the images show up.
      setLoading(false); //Removing the progress indicator which is shown when the urls are coming from the database.
    });
    return () => {
      url_stream(); //Unsubscribing to the stream once the gallery page is exited. This is to prevent unnecessary use of processing & memory.
    }
  }, []);

  return (
    <div>
    <MenuX />
    <Header />
    <div className="gallery__container">
    <h1> Gallery</h1>
    {loading &&
      <progress></progress>
    } 
    {!loading &&
      <div>	
      {imageUrls.map((urls) =>
      <div>
      <img src={urls}/>
      </div>
      )}
      </div>
    }
    </div>
    </div>
  )
}

export default GalleryX
