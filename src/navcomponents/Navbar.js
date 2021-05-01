import React, {useState} from 'react'
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';
import './Navbar.css'
import { FaBars ,FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [popUp , setPopUp] = useState(false);



    const decor = {
        textDecoration: 'none'
    }
    

    return (
        <header>
                 <img className='logo' src={logo} alt="logo" />
                 <nav>
                    <ul className={popUp ? 'me' : 'stay'}>
                        <Link style={decor} to="/"><li>Home</li></Link>
                        <Link style={decor} to="/about"><li>About</li></Link>
                        <Link style={decor} to="/works"><li>Work</li></Link>
                        <Link style={decor} to="/contact"><li>Contact</li></Link> 
                     </ul>
                 </nav>
                 <div className='bars' onClick={() => setPopUp(!popUp)}>
                   {popUp ? <FaTimes/> : <FaBars/>}
                 </div>  
        </header>
    )
}

export default Navbar
