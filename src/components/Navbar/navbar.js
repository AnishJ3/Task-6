import React from 'react'
import './navbar.css'
import {Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar =() =>
{
    return(
        <nav className='nav'>
            <div className='logo'>

                <span>A </span><span style={{color:"red"}}>J</span>
            </div>

            <div className='menu'>

                <Link activeClass='active' to='intro' smooth={true} spy={true} offset={-100} duration={500} className="item">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="item">About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="item">Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="item">Contact</Link>

            </div>

            <button className='contactme' onClick={()=>{
                
                document.getElementById('contact').scrollIntoView({behaviour:'smooth'});
            }}>
            <FontAwesomeIcon icon="fa-regular fa-comment" />Contact Me
            </button>

        </nav>

    )
}

export default Navbar;