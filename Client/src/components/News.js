
import './News.css' 
import Header from './Header'
import MenuX from './MenuX'

import React from 'react'

const News = () => {
    return (
        <div>
            <MenuX />
            <Header />
            <span className='news__title'>News</span>
        </div>
    )
}

export default News
