import './Product.css' 
import Header from './Header'
import MenuX from './MenuX'
import React from 'react'
import sonasac3 from '../assets/sonasac3.png'
import sonasac4 from '../assets/sonasac4.png'
import Clinker from '../assets/Clinker.png'
import{
    Link
} from "react-router-dom";


import Fade from 'react-reveal/Fade';

const Products = () => {
    return (
        <div>
            <MenuX />
            <Header />

            <div className="product__body__dad">


            <div className="empty__space__pr"></div>
            
            <div className="product__body"> 
            


            <Fade bottom>
            <div className="card">
                <div className="circle2">
                    <div className="content">
                        <h2 className='product__title'>Sona</h2>
                        <span className='product__desc'>
                        Ordinary Porrtland Cement (OPC) <br></br>
                        It is used for general construction purposes where special properties are not required such as reinforced concrete buildings, bridges, pavements, and where soil conditions are normal.

                            
                        </span>

                    </div>
                    
                </div>
                <img src={sonasac4} alt=""/>
            </div>
            </Fade>



            <Fade bottom>
            <div className="card">
                <div className="circle">
                    <div className="content">
                        <h2 className='product__title'>Sona Shree</h2>
                        <span className='product__desc'>
                        Pozzolana Portland Cement (PPC) <br></br>
                        They can be reliably utilized in the construction of marine structures, masonry mortars and plastering, hydraulic structures, sewage pipes, dams, etc. PPC is also employed in all other applications where OPC is used.    
                        </span>

                    </div>
                    
                </div>
                <img src={sonasac3} alt=""/>
            </div>
            </Fade>

            <Fade bottom>
            <div className="card">
                <div className="circle3">
                    <div className="content">
                        <h2 className='product__title3'>Clinker</h2>
                        <span className='product__desc3'>
                        Cement clinker is a solid material produced in the manufacture of Portland cement as an intermediary product.
                        Clinker, combined with additives and ground into a fine powder, is used as a binder in cement products.
                            
                        </span>

                    </div>
                    
                </div>
                <img src={Clinker} alt=""/>
            </div>
            </Fade>

            <Fade bottom>
                <div className="btn__body">
                <Link to={'/contact'} class="btn__products">Order Now</Link>
                </div>
                
            
            </Fade>
            
            
            
            
            
            </div>
        </div>
        </div>
    )
}

export default Products
