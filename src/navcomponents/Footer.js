import React from 'react'
import './Footer.css'
import { FaTwitter, FaWhatsapp,FaInstagram} from 'react-icons/fa';
import { HiOutlineMail} from 'react-icons/hi'; 


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='socials'>
                    <a className='twitter' href="http://twitter.com/mrudeh_"><FaTwitter /></a>
                    <a className='instagram' href="https://instagram.com/cora_consults"><FaInstagram/></a>
                    <a className='whatsapp' href="https://api.whatsapp.com/send?phone=+2348052570145"><FaWhatsapp/></a>
                    <a className='mail' href="mailto: coraservicesng@gmail.com"><HiOutlineMail /></a>
                </div>
                <footer className='site-footer'>&copy; Copyright 2021 Phay'vo Consults</footer>
                <div className='site-footer'>All Rights Reserved</div>
            </div>
        </>
    )
}

export default Footer
