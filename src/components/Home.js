import React from 'react'


import Item from './components/Item';



import Accessories from './assets/Desktop-Accessories.jpg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';





const Home = () => {
    return (
        <div className="App">
        <Header />
        
        <div className="app_itemsContainer">
            {/*To understand all these attributes inside of Item refer to the long ass comment in Item.js */}
            <Item
            title='ModelX'
            desc='ModelX Description'
            descLink=''
            backgroundImg={ModelX}
            leftBtnTxt='ModelX'
            leftBtnLink=''
            rightBtnText='ModelX'
            rightBtnLink=''
            twoButtons='true'
            first
            />

            <Item 
            title='Accessories'
            desc='Accessories Description'
            descLink=''
            backgroundImg={Accessories}
            leftBtnTxt='Accessories'
            leftBtnLink=''
            rightBtnText='Accessories'
            rightBtnLink=''
            twoButtons='true'
            
            />


            <Item
            title='ModelS'
            desc='ModelS Description'
            descLink=''
            backgroundImg={ModelS}
            leftBtnTxt='ModelS'
            leftBtnLink=''
            rightBtnText='ModelS'
            rightBtnLink=''
            twoButtons='true'
            
            />

            <Item
            title='Model3'
            desc='Model3 Description'
            descLink=''
            backgroundImg={Model3}
            leftBtnTxt='Model3'
            leftBtnLink=''
            rightBtnText='Model3'
            rightBtnLink=''
            twoButtons='true'
            
            />

            <Item
            title='ModelY'
            desc='ModelY Description'
            descLink=''
            backgroundImg={ModelY}
            leftBtnTxt='ModelY'
            leftBtnLink=''
            rightBtnText='ModelY'
            rightBtnLink=''
            twoButtons='true'
            
            />

            <Item
            title='SolarPanels'
            desc='SolarPanels Description'
            descLink=''
            backgroundImg={SolarPanels}
            leftBtnTxt='SolarPanels'
            leftBtnLink=''
            rightBtnText='SolarPanels'
            rightBtnLink=''
            twoButtons='true'
            />

            <Item
            title='SolarRoof'
            desc='SolarRoof Description'
            descLink=''
            backgroundImg={SolarRoof}
            leftBtnTxt='SolarRoof'
            leftBtnLink=''
            rightBtnText='SolarRoof'
            rightBtnLink=''
            />




        </div>
    </div>
    )
}

export default Home
