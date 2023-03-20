import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css'

// logo // 
import logo from '../images/logo1.png';




function Home() { 

    return <> 
        <div className='navigation'> 
            <div> 
                <img src='' alt='image displayed here' id='main-content-image' width={'500px'} height={'500px'}/> 
            </div>

            <div className='lnd-link'>
                <Link to={'/about-me'}> about </Link>
                <Link to={'/contact-me'}> contact </Link>
                <Link to={'/portfolio'}> portfolio </Link>
            </div>

        </div>

        <div className='main-content'> 
            <img src='' alt='slideshow of me'/> 
            <h1> Hi I'm Brooke, A Full Stack Developer.</h1>
        </div>

        <div className='second-content'> 
           <div className='r-ani'> 
                <div className='animation' id='plant animation'> </div>
                <p className='animd'> I like to build cool things with code! </p>
            </div>

            <div className='l-ani'> 
                <p className='animd'> Especially redesigning and reanimating. </p>
                <div className='animation' id='plant animation'> </div>
\            </div>
        </div>

        <div> 
            <button> give me more ! </button>
            {/* function to redirect to portfolio */}
        </div>

        <div className='footer'>
           
        </div>
    </>
}

export default Home; 