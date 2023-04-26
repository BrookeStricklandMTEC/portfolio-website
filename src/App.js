import React, { useEffect, useState } from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import "@lottiefiles/lottie-player";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return <>

    <Router>
      {loading ?  (
        <div className='loading'> 
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets3.lottiefiles.com/packages/lf20_a7hbqwb9.json"
           style={{width: '500px', height: '500px'}}
          >
          </lottie-player>
          </div>
          ) : (

              <Routes>
                <Route path='/portfolio-website/home' element={<Home> </Home>} > </Route>
                <Route path='/about-me' element={<About> </About>} > </Route>
                <Route path='/contact-me' element={<Contact> </Contact>} > </Route>
                <Route path='/portfolio' element={<Portfolio> </Portfolio>}> </Route>
              </Routes>
         )}
        </Router>
  </>
  
}

    export default App;
