import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

function Home() {

    const urls = ["./images/example1.webp", "./images/example3.jpg", "./images/example4.webp", "./images/example5.jpg", './images/example6.jpg'];
    const [index, disbatchCycle] = React.useReducer((state,a) => {
        return (state + 1 ) % urls.length;
    }, 0);

    React.useEffect(() => {
        const timerID = setInterval(() => disbatchCycle(true), 2000);

        return () => {
            clearInterval(timerID);
        }
    })

    function LinkToPort() {
        window.location.href = '/portfolio'; 
    }

    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if(entry.isIntersecting){
    //             document.querySelectorAll('.second-content')[0].classList.add('r-ani-div')
    //             document.querySelectorAll('second-content')[1].classList.add('l-ani-div')

    //         }
    //     })
    // })

    // observer.observe(document.querySelector('.second-content'))
 
    return <>
        <div> 
            <div className='navigation'>
                <div>
                    <img src='./images/logo1.png' alt='image displayed here' id='logo-image'/>
                </div>

                <div className='lnd-link'>
                    <Link to={'/about-me'}> about </Link>
                    <Link to={'/contact-me'}> contact </Link>
                    <Link to={'/portfolio'}> portfolio </Link>
                </div>

            </div>

            <div className='main-content'>
                <img src={urls[index]} alt='1' width={'150px'} height={'150px'} id="lnd-image" />
                <h1> Hi I'm Brooke, A Full Stack Developer.</h1>
                <h3> Build Unique with me!</h3>
            </div>
                <div className='second-content'>
                    <div className='r-ani'>
                        <div id='plant-wrapper'>
                            <img src='./images/plant.gif' className='animation' id='plant-animation' />
                        </div>
                        <p className='animd'> I like to build cool things with code! </p>
                    </div>

                    <div className='l-ani'>
                        <p className='animd'> Especially when I get to redesign and reanimate! </p>
                        <div id='ghost-wrapper'>
                            <img src='./images/ghost.gif' className='animation' id='ghost-animation' />
                        </div>
                    </div>
                </div>

            <div className='button-wrapper'>
                <button className="button" role="button23" onClick={LinkToPort}> show me more! </button>
            </div>

            <footer>

            </footer>

        </div>
    </>
}


export default Home; 