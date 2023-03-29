import React from "react"
import { Link } from "react-router-dom"
import './styles/About.css'

function About() {

    return <>

        <div className="wrapper">

            <div className="jump-wrapper">

                <a href="#jump-about" className="jumper"> 1 </a>
                <a href="#jump-edu" className="jumper">  2</a>
                <a href="#jump-exp" className="jumper"> 3 </a>
                <a href="#jump-med" className="jumper"> 4 </a>

            </div>

            <div className="container">
                {/* flex center wont work, get help to try to center heap-p-flex */}

                <div className="hea-p-flex">
                    <div className="box1"> </div>
                    <div className="box2"> </div>

                    <h2 id="jump-about" className="head-wrap"> About Me </h2>

                    <div className="about-d">
                        <h3> Brooke strickland </h3>
                        <h6> Web Developer </h6>

                        <p>
                            Hello there, my name is Brooke Strickland (as you've probably seen).

                            I started programming at the young age of 13, I was the only female in my game development class at Lakeridge Junior High in Orem Utah, my hometown.
                            Game Developement has always been such a cool concept to me. Although, I was more interested in the animation and looks of games at the time.
                        </p>

                        <p>
                            Fast-forward four years, I learned just about everything the game-development course had to offer.
                            Junior year of high school, my parents told me to check out Mountain View High School's Programming and Development class.
                        </p>

                        <p>
                            First day of my programming and development class changed just about everthing!
                            From there, my instructor saw my potential and said I should check out Mountainland Technical College's Web Development Program!

                            After taking MTECH's introduction course at the same time as working for Skill Struck as a QA, I truly fell in love with Web Development and everything it has to offer!

                            I adore web developing and problem solving, and I truly want to expand my knowledge of programming, so I can make cooler things to show off!
                        </p>

                        <p>
                            I truly think programming has changed me into a much more diligent and hard working person than I was before.
                            Programming has helped me see problems with a logical eye and push me past my comfort zone.
                            I hope to prove to you, viewer, that I am a worthy member of any development team!
                        </p>

                    </div>

                </div>

                <div className="hea-p-flex-end">



                    <div className="box3"> </div>
                    <div className="box4"> </div>

                    <h2 id="jump-edu" className="head-wrap"> Education </h2>

                    <div className="about-d-2">
                        <i> </i>
                        <h3> Mountainland Technical College </h3>
                        <h6> Web Developement </h6>
                        <h6> August 2022 - May 2023 </h6>
                        <p>
                            Mountainland Technical College has provided me a great opportunity to reach out and find a company willing to take me in as a Web Developement Intern.
                            I am hoping to find this opportunity to grow within the company and expand my skillsket to continue on with them even after the internship is over!

                            Below, are some of the many programming languages and skills I developed and improved during my time with MTECH.
                        </p>

                        <div className="skill-wrapper">

                            <div className="skill-cont">
                                <div className="skills javas"> 65% </div>
                            </div>

                            <div className="skill-cont">
                                <div className="skills s-css"> 80% </div>
                            </div>

                            <div className="skill-cont">
                                <div className="skills node"> 50% </div>
                            </div>

                            <div className="skill-cont">
                                <div className="skills jquery"> 70% </div>

                            </div>

                            <div className="skill-cont">
                                <div className="skills react"> 80% </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="hea-p-flex-end">

                    <h2 id="jump-exp" className="head-wrap"> Experience </h2>

                    <div className="about-d-2">

                        <p> Below, is a showcase of my work experience over the years. </p>


                        <h3> Quality Assurance </h3>
                        <i> </i>
                        <h6> Skill Struck </h6>
                        <h6> January 2022 - May 2022 </h6>


                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>


                        <h3> Technical Support </h3>
                        <i> </i>
                        <h6> Fluent Solar </h6>
                        <h6> January 2022 - August 2022 </h6>


                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <h3> Customer Service Representative </h3>
                        <i> </i>
                        <h6> Preventive Pest Control </h6>
                        <h6> August 2022 - Present </h6>


                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </div>

                </div>

                <div className="hea-p-flex">
                    <div className="box1"> </div>
                    <div className="box2"> </div>

                    <h2 id="jump-med" className="head-wrap"> Follow Me! </h2>

                    <div className="about-d">
                        <h3> LinkedIn </h3>
                        <i> </i>
                        <a href=""> linkedin </a>

                        <h3> GitHub </h3>
                        <i> </i>
                        <a href=""> github </a>

                        <h3> Other? </h3>
                        <i> </i>
                        <a href=""> linkedin </a>

                    </div>

                </div>



            </div>

        </div>

        <footer>
            <img src='./images/logo1.png' alt='image displayed here' id='logo-image'/>
            <Link to={'/'} style={{ textDecoration: 'none', color: '#a9c7ac', fontSize: '20px' }} className='foot-lnk' > home </Link>
            <Link to={'/contact-me'} style={{ textDecoration: 'none', color: '#a9c7ac', fontSize: '20px' }} className='foot-lnk'> contact </Link>
            <Link to={'/portfolio'} style={{ textDecoration: 'none', color: '#a9c7ac', fontSize: '20px' }} className='foot-lnk'> portfolio </Link>
        </footer>
    </>
}
export default About