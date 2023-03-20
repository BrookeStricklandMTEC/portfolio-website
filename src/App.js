import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


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
  {loading ? (
    <div className='image-parent'> 
      <div className='loader-container'>
        <div id='spinner'> </div>
      </div>
    </div>
    ) : (
    <Routes>
      <Route path='/' element={<Home> </Home>} > </Route>
      <Route path='/about-me' element={<About> </About> } > </Route>
      <Route path='/contact-me' element={ <Contact> </Contact> } > </Route>
      <Route path='/portfolio' element={<Portfolio> </Portfolio>}> </Route>
    </Routes>
 )} 
 </Router>
  </>
}

export default App;
