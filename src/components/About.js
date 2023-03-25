import React from "react"
import { Link } from "react-router-dom"
import './styles/About.css'

function About() {

    return <>

        <div className="wrapper">

            <div className="jump-wrapper">

                <a href="#jump-about"> 1 </a>
                <a href="#jump-edu">  2</a>
                <a href="#jump-exp"> 3 </a>
                <a href="#jump-med"> 4 </a>

            </div>

            <div className="container">
                {/* flex center wont work, get help to try to center heap-p-flex */}

                <div className="hea-p-flex">

                    <h2 id="jump-about" className="head-wrap"> About Me </h2>
                    <div className="about-d">
                        <h3> Brooke strickland </h3>
                        <h6> Web Developer </h6>

                        <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
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

                    <h2 id="jump-about" className="head-wrap"> Education </h2>

                    <div className="about-d-2">
                        <i> </i>
                        <h3> Mountainland Technical College </h3>
                        <h6> Web Developement </h6>

                        <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                </div>



            </div>

        </div>

        <footer>
            <Link to={'/'}> home </Link>
        </footer>
    </>
}
export default About