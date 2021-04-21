import React, { useState } from 'react'
import Header from './Header'
import MenuX from './MenuX'
import Profile from '../assets/profile.jpg'
import './Home.css';


import banner1 from '../assets/banner1.jpg';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Home.css';



const Home = ({_notice, _RemoveNotice, text}) => {

    return (
      <div className="App">
        <link
      href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
      rel="stylesheet"
    /> 
      <div>
        <Popup open={_notice} onClose={_RemoveNotice} modal>
	  <div className="modal">
            <button className="close" onClick={_RemoveNotice}>&times;</button>
            <div className="content"> 
              {text}
            </div>
	  </div>
        </Popup> 
      </div>
      <MenuX />
       <Header />
      
       <div class="wrapper">
      <div class="parallax__group hero-container">
        <div class="parallax__layer sky"></div>
        
      
        
        <div class="parallax__layer people2"></div>
        <div class="parallax__layer people3"></div>
        <div class="parallax__layer hero-text">
        
          
          <div class="year-container">
            
          
            
          </div>
          <div class="social-container">
            <a href="https://www.facebook.com/sonacement/" target="_blank"
              ><i class="icon ion-logo-facebook"></i
            ></a>
            <a href="https://twitter.com/sonacement" target="_blank"
              ><i class="icon ion-logo-twitter"></i
            ></a>
            <a href="/contact" target="_blank"
              ><i class="icon ion-logo-google"></i
            ></a>
            <a href="https://www.instagram.com/sonacement/"target="_blank"
              ><i class="icon ion-logo-instagram"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="parallax__group info-container">
        <img src={Profile} alt="Lively and colourful concert" />
        <div class="text-container">
          <h2>Sona Cement</h2>
          <p>What would life be if we had no courage to attempt anything?</p>
          <p>- Vincent Van Gogh</p>
          <a href="#" class="btn">Order Now</a>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Home
