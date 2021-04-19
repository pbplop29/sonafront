import './Product.css' 
import Header from './Header'
import MenuX from './MenuX'
import React from 'react'
import sonasac from '../assets/sonasac.png'
import sonasac2 from '../assets/sonasac2.png'
import Clinker from '../assets/Clinker.png'
const Products = () => {
    return (
        <div>
            <MenuX />
            <Header />

            <div className="product__body__dad">


            <div className="empty__space__pr"></div>
            
            <div className="product__body"> 
            



            <div className="card">
                <div className="circle2">
                    <div className="content">
                        <h2 className='product__title'>Sona</h2>
                        <span className='product__desc'>
                        Ordinary Porrtland Cement (OPC) <br></br>

                            
                        </span>

                    </div>
                    
                </div>
                <img src={sonasac2} alt=""/>
            </div>




            <div className="card">
                <div className="circle">
                    <div className="content">
                        <h2 className='product__title'>Sona Shree</h2>
                        <span className='product__desc'>
                        Pozzolana Portland Cement (PPC)
                            
                        </span>

                    </div>
                    
                </div>
                <img src={sonasac} alt=""/>
            </div>
            


            <div className="card">
                <div className="circle3">
                    <div className="content">
                        <h2 className='product__title3'>Clinker</h2>
                        <span className='product__desc3'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, eos? 
                            Rerum odit reiciendis aperiam deserunt molestias hic
                            ex eveniet. Magnam, voluptatem dolor corporis iste r
                            
                        </span>

                    </div>
                    
                </div>
                <img src={Clinker} alt=""/>
            </div>




            
            
            
            
            
            
            </div>
        </div>
        </div>
    )
}

export default Products
