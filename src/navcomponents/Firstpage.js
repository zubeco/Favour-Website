import React from 'react'
import clutch from '../img/clutch.png';
import green from '../img/green.jpg';
import firstimg from '../img/firstimg.png';
import secondimg from '../img/secondimg.png';
import thirdimg from '../img/thirdimg.png';
import footerimg from '../img/footerimg.png';
import './Firstpage.css'



const Firstpage = () => {
    return (
        <>
            <div className='container'>
                    <h2 className='head'>Why Phay'vo Consults ?</h2>
                    <div className="gen">
                            <div className='child1'>
                                <h4>PARTNER</h4>
                                <h3>Data is our ally</h3> 
                                <h5>We are obsessed with analytics.</h5>
                                <p>The seeds of our success lie in our Value Creation Assessment. Developed from years of business learnings — our wins and our fails, this proven proprietary IP informs and guides Orchid Black strategy and execution.</p>
                            </div>
                            <div className='child1'>
                                <h4>EXECUTE</h4>
                                <h3>Our bench is deep</h3>
                                <h5>We are experts in our fields.</h5>
                                <p>As seasoned growth operators, our insights have impact. Simply put: we know how to move the needle. Our team ethos is “better together,” so when you partner with Orchid Black, we all show up — and the results are powerful.</p>
                            </div>          
                            <div className='child1'>
                                <h4>THRIVE</h4>
                                <h3>Everyone wins</h3>
                                 <h5>We are driven by performance.</h5>
                                <p>Our aligned business model is calibrated for results. In every partnership, we work and take on risk shoulder to shoulder with our clients. Orchid Black’s unique working relationship creates value and drives growth.</p>
                            </div>
                    </div>
            </div>
            <div className="sua">
                        <p className='move'>...And we see <span className='green'>green</span> </p>
                        <h6>*Value created by Sua-Nation Managing Partners</h6>
            </div>
            <div className="bro">
                    <img className='clutch' src={clutch} alt="" />
                    <div className="child2">
                        <h4>COMPANY NEWS</h4>
                        <h3>Third year in a row,Orchid Black Named <span>Top Business Consultants for 2021!</span> </h3> 
                        <p>We’re super-proud to be the recipient of Clutch’s annual award that ranks the country’s top business consultants.  The data-driven field guide to B2B business analyzed over 1,000+
                             businesses and recognized Orchid Black partners 
                             as among the best in the business. Go team!</p>
                    </div>
            </div>
            <div className="tell-us">
                <img className='green' src={green} alt="" />
                <h1>Want to grow your company?</h1>
                <h3>Tell us more</h3>
            </div>
            <div className="last">
                <h1>What Our Clients Say</h1>
                <div className="gen2">
                    <div className="children1">
                        <img className='firstimage' src={firstimg} alt=""/>
                        <p>"The deliverables provided impactful insights and gave the partner a look into their current standing. Orchid Black followed the timeline in an efficient manner and met every deadline. Their experience and expertise instilled confidence in the partner. Transparency is a hallmark of their work."</p>
                        <h4>—Founder & President</h4>
                    </div>
                    <div className="children1">
                        <img className='firstimage' src={secondimg} alt=""/>
                        <p>"We worked with OrchidBlack on a Pricing/Packaging project for one of our key portfolios. Overall the project was a success. The team excelled in gathering and synthesizing a ton of qualitative and quantitative data through internal, customer, and partner interviews and primary/secondary market research. The team members added a lot of value with their B2B Enterprise Software expertise and rich experience of having worked in large Enterprise partner programs."</p>
                        <h4>—Sr. Product Marketing Manager RSA Security</h4>
                    </div>
                    <div className="children1">
                        <img className='firstimage' src={thirdimg} alt=""/>
                        <p>"Thoughtful, helpful and proactive. Recommend for any future research projects."</p>
                        <h4>—EVP, Strategy & Operations</h4>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <div className="first-footer">
                        <h2>Headquarters:</h2>
                        <p>601 Third Street South Suite Lagos, NG 33701</p>
                    </div>
                    <div className="first-footer">
                        <h2>Offices:</h2>
                        <p>Lagos</p>
                        <p>Enugu</p>
                        <p>Porthacourt</p>
                    </div>
                    <div className="first-footer">
                        <h2>Contact:</h2>
                        <p>chikeziefavour14@gmail.com</p>
                    </div>
                    <div className="first-footer">
                        <h2>Legal:</h2>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
                <img className='footerimage' src={footerimg} alt=""/>
                <footer className='site-footer'>&copy; Copyright 2021 Phay'vo Consults</footer>
                <div className='site-footer2'>All Rights Reserved</div>
            </div>
            
        </>
    )
}

export default Firstpage
                    