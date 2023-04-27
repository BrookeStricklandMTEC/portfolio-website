import React, {useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import './styles/Home.css';

import AOS from "aos";
import "aos/dist/aos.css"

function Home() {

    // aos
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    // image cycling 
    const urls = ["./images/brooke1.JPG", "./images/brooke2.JPG", "./images/brooke3.JPG", "./images/brooke4.png", './images/brooke5.JPG'];
    const [index, disbatchCycle] = React.useReducer((state,a) => {
        return (state + 1 ) % urls.length;
    }, 0);

    React.useEffect(() => {
        const timerID = setInterval(() => disbatchCycle(true), 2000);

        return () => {
            clearInterval(timerID);
        }
    })

    // links 
    function LinkToPort() {
        window.location.href = '/#/portfolio'; 
    }
 
    return <>
        <div> 
            <div className='navigation'>
                <div>
                    <img src='./images/logo1.png' alt='./images/logo1.png' id='logo-image'/>
                </div>

                <div className='lnd-link'>
                    <Link to={'/about-me'} style={{textDecoration: 'none', color: '#a9c7ac', fontSize: '20px'}}> about </Link>
                    <Link to={'/contact-me'} style={{textDecoration: 'none', color: '#a9c7ac', fontSize: '20px'}}> contact </Link>
                    <Link to={'/portfolio'} style={{textDecoration: 'none', color: '#a9c7ac', fontSize: '20px'}}> portfolio </Link>
                </div>

            </div>

            <div className='main-content'  data-aos="fade-down">
                <img src={urls[index]} alt='1' width={'150px'} height={'150px'} id="lnd-image" />
                <h1> Hi I'm Brooke, A Full Stack Developer.</h1>
                <h3> Build Unique with me!</h3>
            </div>
                <div className='second-content'>
                    <div className='r-ani' data-aos="fade-right">
                        <div id='plant-wrapper'>
                            <img src='./images/plant.gif' className='animation' id='plant-animation' />
                        </div>
                        <p className='animd'> I like to build cool things with code! </p>
                    </div>

                    <div className='l-ani' data-aos="fade-left">
                        <p className='animd'> Especially when I get to redesign and reanimate! </p>
                        <div id='ghost-wrapper'>
                            <img src='./images/ghost.gif' className='animation' id='ghost-animation' />
                        </div>
                    </div>
                </div>

            <div className='button-wrapper' data-aos="fade-up">
                <button className="button" role="button23" onClick={LinkToPort}> show me more! </button>
            </div>

            <footer>

            </footer>

        </div>
    </>
}


export default Home; 