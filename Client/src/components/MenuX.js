import { slide as Menu } from 'react-burger-menu'
import sonaLogoGif from '../assets/Sona-logo-gif.gif'
import './MenuX.css' 
import{
  Link
} from "react-router-dom";


    import React from 'react'

    const MenuX = () => {
        return (
            <div>
                {/* "right" pulls the menu from the right, put "left" if you want otherwise. "disableAutoFocus" prevents from automatic focus of the first menu item.*/}
    <Menu right disableAutoFocus> 
    {/* All the menu items. */}
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About Us</Link>
    <Link to={'/gallery'}>Gallery</Link>
    <Link to={'/news'}>News</Link>
    <Link to={'/contact'}>Contact Us</Link>
    <Link to={'/'}>
    <div className="image">
    <img src={sonaLogoGif} alt="" />
    </div>
    </Link>
    </Menu>
            </div>
        )
    }

    export default MenuX
