import React from 'react'
import './Header.css' 
import Sonalogoborder from '../assets/sona-logo-png-border.png'
import{
  Link
} from "react-router-dom";


const Header = () => {
    return (
        <div className='header'>

            <div className="header__bg"></div>
            <div className = 'header__logo'>
                <a href="/"><img href='/home' src={Sonalogoborder} alt="Tesla Logo"/></a>
            
                
            </div>


            <div className="header__center">
                <p> <Link to={'/'}>Home</Link></p>
                <p> <Link to={'/about'}>About Us</Link></p>
                <p> <Link to='/products'>Products</Link></p>
                <p><Link to={'/gallery'}>Gallery</Link></p>
                <p><Link to={'/news'}>News</Link></p>
                <p> <Link to='/contact'>Contact Us</Link></p>
                
            </div>


            <div className="header__right">
            <div className="menu__icon">
                
                </div>
                
            </div>
            
            

            
        </div>
    )
}



export default Header


