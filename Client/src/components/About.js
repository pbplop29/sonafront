
import Header from './Header'
import MenuX from './MenuX'
import React from "react";

import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const About = () => 
<div>
    <MenuX />
    <Header />
<Gallery photos={photos} />;
</div>
export default About


