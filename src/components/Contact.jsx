import React, {useEffect} from "react"
import { Link } from "react-router-dom";
import './styles/Contact.css';

import AOS from "aos";
import "aos/dist/aos.css"

function Contact() {

        // aos
        useEffect(() => {
            AOS.init({duration: 2000});
        }, []);
    
    return (
        <>
            <div className='header'>
                <p className='header-text'> lets get in touch! </p>
            </div>
            <div className="email-wrapper" data-aos="fade-up">
                <section>
                    <div className="cont">
                        <form action="https://formspree.io/f/xvonvqpy" method="POST">
                            <div className="form">
                                <label htmlFor="userName" >Subject</label>
                                <input type="text" className="userName" name="Username" required />
                            </div>
                            <div className="form">
                                <label htmlFor="message">Message</label>
                                <textarea type="text" className="message" name="message" rows="16" required></textarea>
                            </div>

                            <button className="inboxbutton" type="submit">Submit</button>
                        </form>
                    </div>

                </section>

            </div>

            <footer>
                <img src='./images/logo1.png' alt='logo not found' id='logo-image' />
                <Link to={'/'} style={{ textDecoration: 'none', color: '#a9c7ac', fontSize: '20px' }} className='foot-lnk' > home </Link>
                <Link to={'/about-me'} style={{ textDecoration: 'none', color: '#a9c7ac', fontSize: '20px' }} className='foot-lnk'> about </Link>
                <Link to={'/portfolio'} style={{ textDecoration: 'none', color: '#a9c7ac', fontSize: '20px' }} className='foot-lnk'> portfolio </Link>
            </footer>
        </>
    )
}


export default Contact;