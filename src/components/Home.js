import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

// logo // 




class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {index: 0};
    this.urls = ['./images/example1.webp', './images/example3.jpg', './images/example4.webp', './images/example5.jpg', './images/example6.jpg'];
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.rotate(), 2500);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  rotate() {
    const newindex = (this.state.index + 1) % this.urls.length;
    this.setState({index:newindex});
  }

    render () {
    return (
    <div> 
        <div className='navigation'>
            <div>
                <img src='' alt='image displayed here' id='main-content-image' width={'300px'} height={'113px'} />
            </div>

            <div className='lnd-link'>
                <Link to={'/about-me'}> about </Link>
                <Link to={'/contact-me'}> contact </Link>
                <Link to={'/portfolio'}> portfolio </Link>
            </div>

        </div>

        <div className='main-content'>
            <img src={this.urls[this.state.index]} alt='1' width={'150px'} height={'150px'} id="lnd-image" />
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
                <p className='animd'> Especially redesigning and reanimating. </p>
                <div id='ghost-wrapper'>
                    <img src='./images/ghost.gif' className='animation' id='ghost-animation' />
                </div>
            </div>
        </div>

        <div className='button-wrapper'>
            <button class="button" role="button23"> show me more! </button>
        </div>

        <div className='footer'>

        </div>
    </div>)
    }
}

export default Home; 