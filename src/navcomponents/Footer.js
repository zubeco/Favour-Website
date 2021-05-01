import React from 'react'
import './Footer.css'
import { FaTwitter, FaGithub} from 'react-icons/fa';
import { HiOutlineMail} from 'react-icons/hi'; 


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='socials'>
                    <a className='twitter' href="http://twitter.com/mrudeh_"><FaTwitter /></a>
                    <a className='github' href="https://github.com/zubeco"><FaGithub /></a>
                    <a className='mail' href="mailto: princezubby2020@gmail.com"><HiOutlineMail /></a>
                </div>
                <footer className='site-footer'>&copy; Copyright 2021 Phay'vo Consults</footer>
                <div className='site-footer'>All Rights Reserved</div>
            </div>
        </>
    )
}

export default Footer
