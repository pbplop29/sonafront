import React from 'react'

import Header from './Header'
import './Contact.css' 


const Contact = () => {
    return (
        <div className="contact__page__body">


            <Header />
            <section>
                <div className="container__dad">
                    <div class="container">
                    <div class="title">Mail Us</div>
                        <div class="content">
                            <form action="#">
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
                                </div>
                                
                                <div class="button">
                                <input type="submit" value="Send Mail"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



            










        
            
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
            </section>
    

        </div>
    );
}

export default Contact
