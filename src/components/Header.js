import React from 'react'
import './Header.css' 
import TeslaLogo from '../assets/teslaLogoSmall.svg'


const Header = () => {
    return (
        <div className='header'>



            <div className = 'header__logo'>
                <img src={TeslaLogo} alt="Tesla Logo"/>
            </div>


            <div className="header__center">
                <p>Home</p>
                <p>About Us</p>
                <p>Gallery</p>
                <p>News</p>
            </div>


            <div className="header__right">
                <p>Contact Us</p>
            </div>



        </div>
    )
}



export default Header


