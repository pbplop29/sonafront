import React, { useState } from 'react'
import Header from './Header'
import MenuX from './MenuX'
import Item from './Item';
import './Home.css';


import Sonabags from '../assets/Sonabags.jpg';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Home.css';



const Home = ({_notice, _RemoveNotice, text}) => {

    return (
      <div className="App">
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
      <div className="app_itemsContainer">
            {/*To understand all these attributes inside of Item refer to the long ass comment in Item.js */}
            <Item
            title='WELCOME'
            desc=''
            descLink=''
            backgroundImg={Sonabags}
            leftBtnText='Order Now'
            leftBtnLink='/contact'
            
            
            
            />

            
        </div>
    </div>
    )
}

export default Home
