import './Product.css' 
import Header from './Header'
import MenuX from './MenuX'
import React from 'react'
import sonasac from '../assets/sonasac.png'
const Products = () => {
    return (
        <div>
            <MenuX />
            <Header />
            <div className="product__body"> 
            



            <div className="card">
                <div className="circle">
                    <div className="content">
                        <h2 className='product__title'>Sona Shree</h2>
                        <span className='product__desc'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, eos? 
                            Rerum odit reiciendis aperiam deserunt molestias hic
                            ex eveniet. Magnam, voluptatem dolor corporis iste r
                            
                        </span>

                    </div>
                    
                </div>
                <img src={sonasac} alt=""/>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            </div>
        </div>
    )
}

export default Products
