import './GalleryX.css' 
import React, { useEffect, useState } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Header from './Header'
import MenuX from './MenuX'
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
        <MenuX />
        <Header />
        <div className="gallery__container">

        
          <h1> Gallery</h1>
	            <Carousel showArrows={true} width="37%" infiniteLoop >
              {imgList.map((element) =>
	        <div>
	          <img src={element}/>
	          <p className="legend">Cement</p>
	        </div>
	      )}
            </Carousel> 
          </div>
          </div>
    )
}

export default GalleryX
