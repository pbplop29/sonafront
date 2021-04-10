import React from 'react'
import './Header.css' 
import TeslaLogo from '../assets/teslaLogoSmall.svg'
import { slide as Menu } from 'react-burger-menu'

const Header = () => {
    return (
        <div className='header'>


            <div className = 'header__logo'>
                <img src={TeslaLogo} alt="Tesla Logo"/>
            </div>

      

            <div className="header__center">
                <p> <a href='/'>Home</a></p>
                <p> <a href='/about'>About Us</a></p>
                <p>Gallery</p>
                <p>News</p>
            </div>


            <div className="header__right">
                <p> <a href ='/contact'>Contact Us</a></p>
            </div>



        </div>
    )
}



export default Header


