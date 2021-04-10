import { slide as Menu } from 'react-burger-menu'

import './MenuX.css' 


    import React from 'react'

    const MenuX = () => {
        return (
            <div>
                {/* "right" pulls the menu from the right, put "left" if you want otherwise. "disableAutoFocus" prevents from automatic focus of the first menu item.*/}
    <Menu right disableAutoFocus> 
    {/* All the menu items. */}
    <a href='/'>Home</a>
    <a href='/about'>About Us</a>
    <a href='/gallery'>Gallery</a>
    <a href='/news'>News</a>
    <a href='/contact'>Contact Us</a>
    </Menu>
            </div>
        )
    }

    export default MenuX
