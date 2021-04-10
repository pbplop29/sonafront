import './GalleryX.css' 
import React, { useEffect, useState } from 'react'
import Gallery from 'react-photo-gallery'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Header from './Header'

const GalleryX = () => {
    const [isOpen, setOverlay] = useState(false);
    const imgList= [
      'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
      'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
      'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
    ];
    function opencarousel(){
      setOverlay(true);
    }
    const configs = {
      animate: true,
      top: `0em`,
    };
    return (
        <div>
        <Header />
        <h1> Gallery</h1>
	   <Carousel showArrows={true} width="37%" infiniteLoop>
            {imgList.map((element) =>
	      <div>
	        <img src={element}/>
	        <p className="legend">Cement</p>
	      </div>
	    )}
           </Carousel> 
        </div>
    )
}

export default GalleryX
