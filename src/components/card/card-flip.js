import React from 'react';
import './card-flip.css'

function CardFlip() {

    return <>

        <div className='wrapper'>
            <div className='card card1'>
                <div className='face front'>
                    <img src='./images/psych.png' height={'500px'} width={'300px'} />
                </div>

                <div className='face back'>
                    <p> This was my very first react developement-jam I had made within three weeks.
                        It is a trivia app with four different categories (pop culture, history, language, and science)
                        Have a look at the full game
                        <a> here </a>
                    </p>
                </div>

            </div>

            <div className='card card2'>
                <div className='face front'>
                    <img src='./images/registration.png' height={'500px'} width={'300px'} />
                </div>

                <div className='face back'>
                    <p> This was my very first full stack school registration application I made with Jarom Oyler within four weeks.
                        Here, there is a functional login and registration feature.
                        You are able to register for classes, which will be displayed on your home page after successfully registring.
                        The classes display their cost, schedule, and more.
                        Have a look at the full application
                        <a> here </a>
                    </p>
                </div>
            </div>


            <div className='card card3'>
                <div className='face front'>
                    <img src='./images/golfapp.png' height={'500px'} width={'300px'} />

                </div>

                <div className='face back'>
                    <p> This piece of work was my very first fully functional javascript built application. </p>
                        
                      <p>  This project introduced me to pulling api.
                        In this app, I pull information from a golf api, which then displays the information from the selected course.
                        Have a look at the full app
                        <a> here </a>
                    </p>
                </div>

            </div>

            <div className='card card4'>
                <div className='face front'>
                    <img src='./images/hrApp.png' height={'500px'} width={'300px'} />
                </div>

                <div className='face back'>
                    <p> This was my very first Angular built application. 
                        This application uses googles firebase to store employee hours, which can then be edited or deleted and will reflect in the application
                        Have a look at the full application
                        <a> here </a>
                        </p>
                </div>

            </div>
        </div>
    </>

}

export default CardFlip;