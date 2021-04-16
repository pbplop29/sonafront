import React from 'react'
import Button from './Button';
import './Item.css' 
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const Item = ({title, desc, backgroundImg, leftBtnText, leftBtnLink,  rightBtnText, rightBtnLink,  twoButtons, first}) => {
    return (
        <div className='item' style={{backgroundImage: "url(" + backgroundImg + ")"}}>       

        {/* 
        //also called all these features above insife the Item thingy because these are all mentioned for all the different pages and 
        //can be arranged directly in the App.js file by calling Item just like we called Header. Multiple items will be called with multiple attributes.
        //The below template is called everytime Item is mentioned and then respective values are put in the slots  
        */}


            <div className="item__container"> 

            



            <div className="item__text">
                <p>{title}</p>
                <div className="item__text__detail">
                    <p>{desc}</p>
                </div>
            </div>

            


            <div className="item__bottom">
                <div className="item__buttons">
                    <Button imp='primary' text={leftBtnText} link={leftBtnLink} />
                    {
                        twoButtons && (
                            <Button imp='secondary' text={rightBtnText} link={rightBtnLink} />
                        )
                    }
                </div>

                {first &&(
                    <div className="item__expand">
                        <ArrowDownwardIcon />
                    </div>
                )}
            </div>


            </div>
            
        </div>
    )
}

export default Item
