import React, {useState} from 'react'
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';
import './Navbar.css'
import {  FaBars } from 'react-icons/fa';

const Navbar = () => {

    const [popUp , setPopUp] = useState(false);



    const styles = {
        textDecoration : 'none'
    };

    return (
        <nav>
            <img className='logo' src={logo} alt="logo" />;
            <ul className= 'me' style={{transform: popUp ? 'translateX(0px)' : 'translateX(-500px)'}}>
                    <Link style = {styles} to="/about">
                        <li  >About</li>
                    </Link>
                    <Link style = {styles} to="/team">
                        <li>Team</li>
                    </Link>
                    <Link style = {styles}to="/services">
                        <li >Services</li>
                    </Link>
                    <Link style = {styles}to="/contacts">
                        <li>Contacts</li>
                    </Link>
            </ul>
            <FaBars onClick={(() => setPopUp(!popUp))} className='bars'/>
            

        </nav>
    )
}

export default Navbar
