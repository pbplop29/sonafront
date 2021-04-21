import React, { useState } from 'react'
import Header from './Header'
import MenuX from './MenuX'
import Item from './Item';
import './Home.css';

import One  from '../assets/1.jpg';
import Two  from '../assets/2.jpg';
import Plant  from '../assets/Plant.jpg';

import Sonabags from '../assets/Sonabags.jpg';
import Profile from '../assets/Profile.jpg';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Home.css';

import Sonabags2 from '../assets/Sonabags2.jpg';

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
            leftBtnText='Explore More'
            leftBtnLink=''
            rightBtnText='ModelX'
            rightBtnLink=''
            
            first
            />

            <Item 
            title='Plant'
            desc='Our plant is spread across 100 acres of land in

            Bijauri, a strategic location at Dang that ensures easy availability of high-grade limestone.'
            descLink=''
            backgroundImg={Plant}
            leftBtnText='Accessories'
            leftBtnLink=''
            rightBtnText='Accessories'
            rightBtnLink=''
            
            
            />


            <Item
            title='ModelS'
            desc='ModelS Description'
            descLink=''
            backgroundImg={Sonabags}
            leftBtnText='ModelS'
            leftBtnLink=''
            rightBtnText='ModelS'
            rightBtnLink=''
            
            
            />

            <Item
            title='Model3'
            desc='Model3 Description'
            descLink=''
            backgroundImg={Sonabags2}
            leftBtnText='Model3'
            leftBtnLink=''
            rightBtnText='Model3'
            rightBtnLink=''
            
            
            />

            <Item
            title='ModelY'
            desc='ModelY Description'
            descLink=''
            backgroundImg={Two}
            leftBtnText='ModelY'
            leftBtnLink=''
            rightBtnText='ModelY'
            rightBtnLink=''
            
            
            />

            <Item
            title='SolarPanels'
            desc='SolarPanels Description'
            descLink=''
            backgroundImg={Plant}
            leftBtnText='SolarPanels'
            leftBtnLink=''
            rightBtnText='SolarPanels'
            rightBtnLink=''
            
            />

            <Item
            title='SolarRoof'
            desc='SolarRoof Description'
            descLink=''
            backgroundImg={Plant}
            leftBtnText='SolarRoof'
            leftBtnLink=''
            rightBtnText='SolarRoof'
            rightBtnLink=''
            />
        </div>
    </div>
    )
}

export default Home
