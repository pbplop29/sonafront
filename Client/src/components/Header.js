import React from 'react'
import './Header.css' 
import TeslaLogo from '../assets/teslaLogoSmall.svg'
import sonaLogoGif from '../assets/Sona-logo-gif.gif'

const Header = () => {
    return (
        <div className='header'>


            <div className = 'header__logo'>
                <img src={TeslaLogo} alt="Tesla Logo"/>
            </div>


            <div className="header__center">
                <p> <a href='/'>Home</a></p>
                <p> <a href='/about'>About Us</a></p>
                <p><a href='/gallery'>Gallery</a></p>
                <p><a href='/news'>News</a></p>
                <p> <a href ='/contact'>Contact Us</a></p>
            </div>


            <div className="header__right">
            <div className="menu__icon">
                
                </div>
                
            </div>
            
            


        </div>
    )
}



export default Header


