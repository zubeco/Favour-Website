import React from 'react'
import image from '../img/image.jpg';
import './Body.css'
import Firstpage from './Firstpage'
import {  BsArrowBarDown } from 'react-icons/bs';


const Body = () => {
    return (
        <>
            <div className='imageWrapper'>
                <img className='image' src={image} alt="" />
                <h1 className='centered'>GROW SMART. GROW FAST</h1>
                <h3 className='under'>Accelerating growth and creating value for select companies</h3>
                <br/>
                <BsArrowBarDown className='arrow'/>
            </div>
            <Firstpage />
       </>
    )
}

export default Body
