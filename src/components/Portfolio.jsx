import React from "react"
import './styles/About.css'
import { Link } from "react-router-dom"

function Portfolio() {
    return<> 

        <footer>
            <img src='./images/logo1.png' alt='logo not found' id='logo-image' />
            <Link to={'/'} style={{ textDecoration: 'none', color: '#a9c7ac', fontSize: '20px' }} className='foot-lnk' > home </Link>
            <Link to={'/contact-me'} style={{ textDecoration: 'none', color: '#a9c7ac', fontSize: '20px' }} className='foot-lnk'> contact </Link>
            <Link to={'/about-me'} style={{ textDecoration: 'none', color: '#a9c7ac', fontSize: '20px' }} className='foot-lnk'> about me </Link>

        </footer>

    </>
}
export default Portfolio