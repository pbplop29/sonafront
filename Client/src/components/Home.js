import React, { useState } from 'react'
import Header from './Header'
import MenuX from './MenuX'
import Profile from '../assets/profile.jpg'
import './Home.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import banner1 from '../assets/banner1.jpg';
import Fade from 'react-reveal/Fade';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Home.css';
import $ from 'jquery';
import{
    Link
} from "react-router-dom";



$(function() {
  setTimeout(function() { $("#hideDiv").fadeOut(1500); }, 6000)
  
  })
  

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
        
      
        
        
        <div class="parallax__layer people3"></div>
        <div class="parallax__layer hero-text">
        
        <div class="year-container">
            <h1  >
              <div className="box__down">
              <span></span>
              <span></span>
              <span></span>



              </div>






            </h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
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
        <img src={Profile}  />
        <div class="text-container">
          <h2>Sona Cement</h2>
        
          <p>
          Address: Sonapur Minerals & Oil Ltd.<br></br>
Bijauri-1,Dang,Nepal<br></br>
Phone: +977 82 530182<br></br>
Po. Box No. 20499<br></br>
Email : info@sonacement.com<br></br></p><br></br>
          <Link to={'/contact'} class="btn">Order Now</Link>
          
        </div>
      </div>


    
      <div className="footer">
      <p >Produced by <span class='alpa'> <a href='https://www.linkedin.com/in/alpabiram-thoplo-33594a210/' target="_blank" class='anch'>ALPABIRAM</a></span></p>
      </div>
  
    </div>
    </div>
    )
}

export default Home
