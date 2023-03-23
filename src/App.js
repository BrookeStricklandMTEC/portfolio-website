import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import LottieView from "lottie-react-native";
import View from "lottie-react-native";


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
      <div> </div>
      // <View>
      //   <LottieView
      //     source={require("./99680-3-dots-loading.json")}
      //     className='lottie'
      //     autoPlay
      //   />
      // </View> 
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
