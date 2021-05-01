import React from 'react'
import image from '../img/image.jpg';
import './Body.css'
import green from '../img/green.jpg';
import {  BsArrowBarDown } from 'react-icons/bs';
import Footer from './Footer';


const Body = () => {
    const details = [
        {
            title:'PARTNER',
            description: 'Data is our ally',
            goals: 'We are obsessed with analytics.',
            portfolio: 'The seeds of our success lie in our Value Creation Assessment. Developed from years of business learnings — our wins and our fails, this proven proprietary IP informs and guides Orchid Black strategy and execution.'
        },
        {
            title:'EXECUTE',
            description: 'Our bench is deep',
            goals: 'We are experts in our fields.',
            portfolio: 'As seasoned growth operators, our insights have impact. Simply put: we know how to move the needle. Our team ethos is “better together,” so when you partner with Orchid Black, we all show up — and the results are powerful.'
        },
        {
            title:'THRIVE',
            description: 'Everyone wins',
            goals: 'We are driven by performance.',
            portfolio: 'Our aligned business model is calibrated for results. In every partnership, we work and take on risk shoulder to shoulder with our clients. Orchid Black’s unique working relationship creates value and drives growth.'
        }
    ]

    return (
        <>
            <div className='general-wrapper '>
                    <img className='image' src={image} alt="" />
                    <h1 className='centered'>GROW SMART. GROW FAST</h1>
                    <h3 className='under'>Accelerating growth and creating value for select companies</h3>
                    <br/>
                    <BsArrowBarDown className='arrow'/>
                    <div className='container'>
                        <h2 className='head'>Why Phay'vo Consults ?</h2>
                        <div className='child-container'>
                        {
                        details.map(detail => {
                            return (
                                    <div className="child1">
                                        <h4>{detail.title}</h4>
                                        <h3>{detail.description}</h3>
                                        <h5>{detail.skills}</h5>
                                        <p>{detail.portfolio}</p>
                                    </div>
                                    ) })}
                        </div>
                     </div>

                     <div className="hire">
                            <img className='green' src={green} alt="" />
                             <a href="/">Hire Us</a>
                     </div>
                     <Footer/>
            </div>
       </>
    )
}

export default Body
