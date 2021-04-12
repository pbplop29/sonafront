import React, { useEffect, useState } from 'react'
import Header from './Header'
import './Contact.css' 
import firebase from "firebase"
import axios from 'axios'
import MenuX from './MenuX'
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {

    const [captchapassed, setCaptcha] = useState(false);

    async function submit(event){
      event.preventDefault();
      if(captchapassed){
	var field = await firebase.firestore().collection("stuff").doc("stuff for website").get(); //Getting the array of email addresses from firebase.
	axios.post('/sendemail', 
	  {emails: field.data()["emails"],
	    firstName: event.target[0].value,
	    lastName: event.target[1].value,
	    email: event.target[2].value,
	    contactNumber: event.target[3].value,
	    address: event.target[4].value,
	    estimatedTransaction: event.target[5].value},) //Sending a json file containing all the field value of the form along with the email recipients
	//to the server.
	  .then(res=>{
	    console.log("request sent");
	  }).catch((error)=>{
	    console.log(error);
	  });
      }
      else{
	alert("CAPTCHA NOT DONE");
      }
    }

    function captchadone(){
      setCaptcha(true);
    }

    return (
        <div className="contact__page__body">
            <MenuX />
            <Header />
            <section>
            <div className="container__dad">
                    <div class="container">
                    <div class="title">Mail Us</div>
                        <div class="content">
                            <form onSubmit = {submit} action="#">
                                <div class="user-details">
                                    <div class="input-box">
                                        <span class="details"> First Name</span>
                                            <input type="text" placeholder="Enter your first name" required></input>
                                    </div>

                                    <div class="input-box">
                                        <span class="details">Last Name</span>
                                            <input type="text" placeholder="Enter your last name" required></input>
                                    </div>

                                    <div class="input-box">
                                        <span class="details">Email</span>
                                            <input type="text" placeholder="Enter your email" required></input>
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Contact Number</span>
                                            <input type="text" placeholder="Enter your password" required></input>
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Address</span>
                                            <input type="text" placeholder="Enter address for delivery" required></input>
                                    </div>
                                    
                                    <div class="input-box">
                                        <span class="details">Estimated Transaction</span>
                                            <input type="text" placeholder="Amount in NRs. or Quantity" required></input>
                                    </div>
       				<div>
        		   	<ReCAPTCHA
          			sitekey = "6LfSxKYaAAAAAKFtCw5Gl1CG6yJ_Y-K1mr6o8D4w"
         			 onChange = {captchadone}
        			/>
                              </div>
                                </div>
                                
                                <div class="button">
                                <input type="submit" value="Send Mail"></input>
                                </div>
                            </form>
                        </div>
                        
                </div>
                    </div>
                    

                
      {/*<div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>*/}
            </section>
            
        </div>
    );
}

export default Contact
