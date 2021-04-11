
import Header from './Header'
import MenuX from './MenuX'
import React from "react";
import sonaLogoGif from '../assets/Sona-logo-gif.gif'
import './About.css'
const About = () => 
<div>
    <MenuX />
    <Header />
    <h1>About</h1>
    <div className="image">
    <img src={sonaLogoGif} alt="" />
    </div>

</div>
export default About


