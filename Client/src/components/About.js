import Header from './Header'
import MenuX from './MenuX'
import React from "react";
import $ from"jquery";
import './About.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import factory from "../assets/Factory.png";
import office from "../assets/office_marker.png";
import "leaflet/dist/leaflet.css"
import {Icon} from 'leaflet'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Fade from 'react-reveal/Fade';

$(document).ready(function() {

    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";

        function pagination() {
        scrolling = true;
        
        $(pgPrefix + curPage).removeClass("inactive").addClass("active");
        $(pgPrefix + (curPage - 1)).addClass("inactive");
        $(pgPrefix + (curPage + 1)).removeClass("active");
        
        setTimeout(function() {
            scrolling = false;
        }, animTime);
        };
    
        function navigateUp() {
        if (curPage === 1) return;
        curPage--;
        pagination();
        };
    
        function navigateDown() {
        if (curPage === numOfPages) return;
        curPage++;
        pagination();
        };
    
        $(document).on("mousewheel DOMMouseScroll", function(e) {
        if (scrolling) return;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            navigateUp();
        } else { 
            navigateDown();
        }
        });
    
        $(document).on("keydown", function(e) {
        if (scrolling) return;
        if (e.which === 38) {
            navigateUp();
        } else if (e.which === 40) {
            navigateDown();
        }
        });
    
    });

const About = () => 


<div>
    <MenuX />
    
    <Header />
    
    <div className="about__body">




    <div className="pc__screen">

    <div class="skw-pages">
  <div class="skw-page skw-page-1 active">
    <div class="skw-page__half skw-page__half--left">
      <div class="skw-page__skewed">
        <div class="skw-page__content"></div>
      </div>
    </div>
    <div class="skw-page__half skw-page__half--right">
      <div class="skw-page__skewed">
      
        <div class="skw-page__content">
        
          <h2 class="skw-page__heading">Profile </h2>
          <p class="skw-page__description">Sonapur Minerals And Oil Limited (Formerly Sonapur Minerals And Oil Private Limited) is registered in the Office of Company Registrar vide Registration No. 239081/64/065 on 13th June, 2008. The registered office and its corporate office is located at Battisputali-9, Kathmandu and its manufacturing unit is located at Tulsipur-18, Dang, a strategic location at Dang that ensures easy availability of high-grade limestone. The company deals in manufacturing and sales of cement and clinker. The company has obtained approval from Department of Industries for manufacture and sales of Ordinary Portland Cement (OPC), Portland Pozzolana Cement (PPC), Portland Slag Cement (PSC) and Clinker. Presently the company is selling OPC and PPC Cement in the market with its brand/trademark of "Sona Cement OPC" and "Sona Shree PPC Cement" and "Sonatech PPC Cement".  Sona Cement is a established brand in the western and far-western market and hence the majority of the sales of the company is concentrated at Western and Far-Western region of the country.</p>
          
          <h2 class="skw-page__heading">
          <h1  >
              <div className="box__down__about">
              <span></span>
              <span></span>
              <span></span>
              </div>
            </h1>
            </h2>
          
        </div>
        
      </div>
    </div>
  </div>
  <div class="skw-page skw-page-2">
    <div class="skw-page__half skw-page__half--left">
      <div class="skw-page__skewed">
        <div class="skw-page__content">
        <h2 class="skw-page__heading">
            <ArrowUpwardIcon />
            </h2>
          <h2 class="skw-page__heading">Achievements</h2>
          <p class="skw-page__description">The company begun its commercial production from F/Y 2068-69 with intital Manufacturing Capacity of 400 TPD of Cement and 750 TPD of Clinker. The company has nearly completed 9 years of its operation since the commencement of production. The plant setup was begun in FY 2065-66 and it took nearly 3 years to complete the setup and commence the production. The cost of Capital Expenditure for Plant setup was financed through Consortium Financing lead by Prime Commercial Bank on October 13, 2009. The industry thereafter successful completed its first expansion project leading to production capacity of   1000 TPD of Cement and 1000 TPD of Clinker in FY 2073-74. Thereafter the second expansion of the production capacity was initiated in FY 2074-75. After the completion of the second expansion the Production Capacity of Cement will be 1700 TPD of Cement and 1500 TPD of Clinker. The second expansion is under progress and expected to complete before Falgun, 2078.  </p>
          <h2 class="skw-page__heading">
            <ArrowDownwardIcon />
            </h2>
        </div>
      </div>
    </div>
    <div class="skw-page__half skw-page__half--right">
      <div class="skw-page__skewed">
        <div class="skw-page__content"></div>
      </div>
    </div>
  </div>
  <div class="skw-page skw-page-3">
    <div class="skw-page__half skw-page__half--left">
      <div class="skw-page__skewed">
        <div class="skw-page__content"></div>
      </div>
    </div>
    <div class="skw-page__half skw-page__half--right">
      <div class="skw-page__skewed">
        <div class="skw-page__content">
        <h2 class="skw-page__heading">
            <ArrowUpwardIcon />
            </h2>
            
          <h2 class="skw-page__heading">Production Capacity</h2>
          <p class="skw-page__description">There has been continuous increase in demand for cement in last ten years and now the domestic production is able to fulfill the current demand of the market reducing the imports of cement/clinker. In the last 9 years the products of Sonapur Minerals & Oil P. Ltd. have been emerged as an established brand due to the quality and strength of its products and its marketing strategies. Considering the brand value given to our products and demand of our products, we were continuously engaged in the expansion of our production capacity since last nine years. Our prediction of what capacity to be setup or increased was on the basis of vision of our promoters. Our promoter's vision was how much we can sell that much production capacity we should have.</p>
          <h2 class="skw-page__heading">
            <ArrowDownwardIcon />
            </h2>
        </div>
      </div>
    </div>
  </div>
  <div class="skw-page skw-page-4">
    <div class="skw-page__half skw-page__half--left">
      <div class="skw-page__skewed">
        <div class="skw-page__content">
        <h2 class="skw-page__heading">
            <ArrowUpwardIcon />
            </h2>
          <h2 class="skw-page__heading">Mines</h2>
          <p class="skw-page__description">The main USP (Unique Selling Point) of the products of Sonapur Minerals & Oil P. Ltd. is the quality of limestone that we have in our mines. The presence of High Grade Limestone in our mines is the main factor that makes our products different than others and the quality/strength of cement/clinker depends upon the quality of the limestone used in to manufacture it. The MgO content which is the major factor for determining the quality of limestone ranges from 1.79% to 3.16%. Lower the MgO, more the strength of clinker and cement. The limestone reserve in our mines is sufficient to serve the purpose of the company with the enhanced production after completion of second expansion. One of our mines is located at Dubidanda, Rolpa and another is located at Dubing, Rolpa. The distance of one of our mines is just 42 kilometre from our factory site and another is just 16 kilometre from our factory site and hence limestone becomes available in our factory at lowest cost possible. Due to the quality of our limestone, we are also selling clinker to other grinding units in the country and out of total sales the portion of clinker sales ranges from 40 to 48%.</p>
          <h2 class="skw-page__heading">
            <ArrowDownwardIcon />
            </h2>
        </div>
      </div>
    </div>
    <div class="skw-page__half skw-page__half--right">
      <div class="skw-page__skewed">
        <div class="skw-page__content"></div>
      </div>
    </div>
  </div>



  <div class="skw-page skw-page-5">
      
    <div class="skw-page__half skw-page__half--left">
      <div class="skw-page__skewed">
        <div class="skw-page__content"></div>
      </div>
    </div>
    <div class="skw-page__half skw-page__half--right">
      <div class="skw-page__skewed">
        <div class="skw-page__content">
        <h2 class="skw-page__heading">
            <ArrowUpwardIcon />
            </h2>
          <h2 class="skw-page__heading">Marketing Network</h2>
          <p class="skw-page__description">
          The majority of the sales of the company is concentrated at Western and Far-Western region of the country. We are having transaction with approximate 900 customers as on date with more than 60 dealers. Our majority of the customers are located at Banke, Dang, Kailali, Surkhet, Bardiya, Rolpa, Rukum, Salyan, Mahendranagar and Kanchanpur. We have more than 150 customers located in Banke and 200 customers in Dang District as these are the nearest location to our factory.
          <h2 class="skw-page__heading">
            <ArrowDownwardIcon />
            </h2>
            
          </p>
        </div>
      </div>
    </div>
    </div>



    <div class="skw-page skw-page-6">
      
      <div class="skw-page__half skw-page__half--left">
        <div class="skw-page__skewed">
          <div class="skw-page__content">
          <h2 class="skw-page__heading">
            <ArrowUpwardIcon />
            </h2>
          <h2 class="skw-page__heading">Location</h2>
            <p class="skw-page__description">
            Address: Sonapur Minerals & Oil Ltd.<br></br>
Bijauri-1,Dang,Nepal<br></br>
Phone: +977 82 530182<br></br>
Po. Box No. 20499<br></br>
Email : info@sonacement.com<br></br>
              
            </p>
            <h2 class="skw-page__heading">
            <ArrowDownwardIcon />
            </h2>
          </div>
        </div>
      </div>
      <div class="skw-page__half skw-page__half--right">
        <div class="skw-page__skewed">
          <div class="skw-page__content">
          <MapContainer className="map" center={[28.168748955638076, 84.3]} zoom={7} scrollWheelZoom={true}>
	    <TileLayer
	      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
              url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
              />
	    <Marker position={[28.092311967162953, 82.37917510277657]} icon={new Icon({iconUrl: factory, iconSize:[40, 44], iconAnchor: [12, 41]})}>
	      <Popup> 
                Factory
	      </Popup>
	    </Marker>
	    <Marker position={[27.70358656052731, 85.34063111430639]} icon={new Icon({iconUrl: office, iconSize:[41, 41], iconAnchor: [12, 41]})}>
	      <Popup>
	        Head Office
	      </Popup>
	    </Marker>
	  </MapContainer> 
          </div>
        </div>
      </div>
      </div>

    <div class="skw-page skw-page-7">
    <div class="skw-page__half skw-page__half--left">
      <div class="skw-page__skewed">
        <div class="skw-page__content">
          
        </div>
      </div>
    </div>
    <div class="skw-page__half skw-page__half--right">
      <div class="skw-page__skewed">
        <div class="skw-page__content">
        <h2 class="skw-page__heading">
            <ArrowUpwardIcon />
            </h2>
        <h2 class="skw-page__heading">Socials</h2>
          <p class="skw-page__description">
            


          <ul>
  <li>
    <a href="https://www.facebook.com/sonacement/" target="_blank">
      <i class="fa fa-facebook" aria-hidden="true"></i>
      <span> - Facebook</span>
    </a>
  </li>
  <li>
    <a href="https://twitter.com/sonacement" target="_blank">
      <i class="fa fa-twitter" aria-hidden="true"></i>
      <span> - Twitter</span>
    </a>
  </li>
  <li>
    <a href="/contact">
      <i class="fa fa-google-plus" aria-hidden="true"></i>
      <span> - Google</span>
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/sonacement/" target="_blank">
      <i class="fa fa-instagram" aria-hidden="true"></i>
      <span> - Instagram</span>
    </a>
  </li>
</ul>



            </p>
        </div>
      </div>
    </div>
  </div>








    </div>
  </div>



  <div className="mobile__screen">
  <link href='https://fonts.googleapis.com/css?family=Wire+One|Raleway:300' rel='stylesheet' type='text/css'></link>

<div class="skew-c"></div>
<div class="colour-block">
<Fade bottom>
  <h1>Profile</h1>
  <div className='mobile__details'>Sonapur Minerals And Oil Limited (Formerly Sonapur Minerals And Oil Private Limited) is registered in the Office of Company Registrar vide Registration No. 239081/64/065 on 13th June, 2008. The registered office and its corporate office is located at Battisputali-9, Kathmandu and its manufacturing unit is located at Tulsipur-18, Dang, a strategic location at Dang that ensures easy availability of high-grade limestone. The company deals in manufacturing and sales of cement and clinker. The company has obtained approval from Department of Industries for manufacture and sales of Ordinary Portland Cement (OPC), Portland Pozzolana Cement (PPC), Portland Slag Cement (PSC) and Clinker. Presently the company is selling OPC and PPC Cement in the market with its brand/trademark of "Sona Cement OPC" and "Sona Shree PPC Cement" and "Sonatech PPC Cement".  Sona Cement is a established brand in the western and far-western market and hence the majority of the sales of the company is concentrated at Western and Far-Western region of the country.</div>
  </Fade>
</div>
<div class="skew-cc"></div> 
<div class="white-block">
<Fade bottom>
          
        
  <h1>Achievements</h1>
  <div className='mobile__details'>The company begun its commercial production from F/Y 2068-69 with intital Manufacturing Capacity of 400 TPD of Cement and 750 TPD of Clinker. The company has nearly completed 9 years of its operation since the commencement of production. The plant setup was begun in FY 2065-66 and it took nearly 3 years to complete the setup and commence the production. The cost of Capital Expenditure for Plant setup was financed through Consortium Financing lead by Prime Commercial Bank on October 13, 2009. The industry thereafter successful completed its first expansion project leading to production capacity of   1000 TPD of Cement and 1000 TPD of Clinker in FY 2073-74. Thereafter the second expansion of the production capacity was initiated in FY 2074-75. After the completion of the second expansion the Production Capacity of Cement will be 1700 TPD of Cement and 1500 TPD of Clinker. The second expansion is under progress and expected to complete before Falgun, 2078.   </div>
  </Fade>
</div>
<div class="skew-c"></div>
<div class="colour-block">
<Fade bottom>
  <h1>Production Capacity</h1>
  <div className='mobile__details'>There has been continuous increase in demand for cement in last ten years and now the domestic production is able to fulfill the current demand of the market reducing the imports of cement/clinker. In the last 9 years the products of Sonapur Minerals & Oil P. Ltd. have been emerged as an established brand due to the quality and strength of its products and its marketing strategies. Considering the brand value given to our products and demand of our products, we were continuously engaged in the expansion of our production capacity since last nine years. Our prediction of what capacity to be setup or increased was on the basis of vision of our promoters. Our promoter's vision was how much we can sell that much production capacity we should have.</div>
  </Fade>
</div>

<div class="skew-cc"></div> 
<div class="white-block">
<Fade bottom>
  <h1>Mines</h1>
  <div className='mobile__details'>The main USP (Unique Selling Point) of the products of Sonapur Minerals & Oil P. Ltd. is the quality of limestone that we have in our mines. The presence of High Grade Limestone in our mines is the main factor that makes our products different than others and the quality/strength of cement/clinker depends upon the quality of the limestone used in to manufacture it. The MgO content which is the major factor for determining the quality of limestone ranges from 1.79% to 3.16%. Lower the MgO, more the strength of clinker and cement. The limestone reserve in our mines is sufficient to serve the purpose of the company with the enhanced production after completion of second expansion. One of our mines is located at Dubidanda, Rolpa and another is located at Dubing, Rolpa. The distance of one of our mines is just 42 kilometre from our factory site and another is just 16 kilometre from our factory site and hence limestone becomes available in our factory at lowest cost possible. Due to the quality of our limestone, we are also selling clinker to other grinding units in the country and out of total sales the portion of clinker sales ranges from 40 to 48%. </div>
  </Fade>
</div>

<div class="skew-c"></div>
<div class="colour-block">
<Fade bottom>
  <h1>Marketing Network</h1>
  <div className='mobile__details'>The majority of the sales of the company is concentrated at Western and Far-Western region of the country. We are having transaction with approximate 900 customers as on date with more than 60 dealers. Our majority of the customers are located at Banke, Dang, Kailali, Surkhet, Bardiya, Rolpa, Rukum, Salyan, Mahendranagar and Kanchanpur. We have more than 150 customers located in Banke and 200 customers in Dang District as these are the nearest location to our factory. </div>
  </Fade>
</div>



<div class="skew-cc"></div> 
<div class="white-block__location">
<Fade bottom>
<h1>Location</h1>
  <div className='mobile__details'>
  Address: Sonapur Minerals & Oil Ltd.<br></br>
Bijauri-1,Dang,Nepal<br></br>
Phone: +977 82 530182<br></br>
Po. Box No. 20499<br></br>
Email : info@sonacement.com<br></br>
 
    </div>
    <div className="mobile__details__location">
    <MapContainer className="map__mobile" center={[28.168748955638076, 83.9]} zoom={7} scrollWheelZoom={true}>
	    <TileLayer
	      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
              url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
              />
	    <Marker position={[28.092311967162953, 82.37917510277657]} icon={new Icon({iconUrl: factory, iconSize:[37, 41], iconAnchor: [12, 41]})}>
	      <Popup> 
                Factory
	      </Popup>
	    </Marker>
	    <Marker position={[27.70358656052731, 85.34063111430639]} icon={new Icon({iconUrl: office, iconSize:[38, 38], iconAnchor: [12, 41]})}>
	      <Popup>
	        Head Office
	      </Popup>
	    </Marker>
	  </MapContainer>
    </div>
    </Fade>
</div>


<div class="skew-c"></div>
<div class="colour-block">
<Fade bottom>
<h1>Socials</h1>
  <div className='mobile__details'>




  


<ul>
  <li>
    <a href="https://www.facebook.com/sonacement/" target="_blank">
      <i class="fa fa-facebook" aria-hidden="true"></i>
      <span> - Facebook</span>
    </a>
  </li>
  <li>
    <a href="https://twitter.com/sonacement" target="_blank">
      <i class="fa fa-twitter" aria-hidden="true"></i>
      <span> - Twitter</span>
    </a>
  </li>
  <li>
    <a href="/contact">
      <i class="fa fa-google-plus" aria-hidden="true"></i>
      <span> - Google</span>
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/sonacement/" target="_blank">
      <i class="fa fa-instagram" aria-hidden="true"></i>
      <span> - Instagram</span>
    </a>
  </li>
</ul>







    
  </div>
  </Fade>
</div>




</div>

















</div>
</div>



export default About

