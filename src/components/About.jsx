import React from "react"
import { Link } from "react-router-dom"
import './styles/About.css';


function About() {
    return <>
        <div className="wrapper">
            <aside className="jump-wrapper">
                <a href="#jump-about" className="jumper"> 1 </a>
                <a href="#jump-edu" className="jumper">  2</a>
                <a href="#jump-exp" className="jumper"> 3 </a>
                <a href="#jump-med" className="jumper"> 4 </a>
            </aside>
            <div className="container">
                {/* flex center wont work, get help to try to center heap-p-flex */}

                <div className="hea-p-flex">
                    <div className="logo-container">
                        <h2 id="jump-about" className="head-wrap"> About Me </h2>
                        <div className="box1" />
                        <div className="box2" />
                    </div>

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
                            I believe programming has changed me into a much more diligent and hard working person than I was before.
                            Programming has helped me see problems with a logical eye and push me past my comfort zone.
                            I hope to prove to you, viewer, that I am a worthy member of any development team!
                        </p>

                    </div>
                </div>

                <div className="hea-p-flex-end">

                <div className="logo-container">
                    <div className="box3"> </div>
                    <div className="box4"> </div>
                    <h2 id="jump-edu" className="head-wrap"> Education </h2>
                </div> 

                    <div className="about-d-2">
                        <i> </i>
                        <h3> Mountainland Technical College </h3>
                        <h6> Web Developement </h6>
                        <h6> August 2022 - May 2023 </h6>
                        <p>
                            Mountainland Technical College has provided me a great opportunity to reach out and find a company willing to take me in as a Web Developement Intern.
                            I am hoping to find this opportunity to grow within the company and expand my skillsket to continue on with them even after the internship is over!

                            Below, are some of the many programming languages and skills I developed and improved on during my time with MTECH.
                        </p>

                        <div className="skill-wrapper">

                            <div className="skill-cont">
                                <p> Javascript </p>
                                <div className="skill-back">
                                    <div className="skills javas">  </div>
                                </div>
                            </div>

                            <div className="skill-cont">
                                <p> CSS/SCSS </p>
                                <div className="skill-back">
                                    <div className="skills s-css">  </div>
                                </div>
                            </div>

                            <div className="skill-cont">
                                <p> Node.js </p>
                                <div className="skill-back">
                                    <div className="skills node"> </div>
                                </div>
                            </div>

                            <div className="skill-cont">
                                <p> Angular </p>
                                <div className="skill-back">
                                    <div className="skills jquery">  </div>
                                </div>
                            </div>

                            <div className="skill-cont">
                                <p> React </p>
                                <div className="skill-back">
                                    <div className="skills react">  </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="hea-p-flex-end">


                <div className="logo-container">
                    <div className="box3"> </div>
                    <div className="box4"> </div>
                    <h2 id="jump-exp" className="head-wrap"> Experience </h2>

                </div>

                    <div className="about-d-3">


                        <h3> Quality Assurance </h3>
                        <image src='./images/skillstruck.png' className="exp-img" width={'100px'} height={'100px'} />
                        <h6> Skill Struck </h6>
                        <h6> January 2022 - May 2022 </h6>

                        <p>
                            This opportunity was granted to me through Mountainview High School.
                            In 2021, I had finished my credits early and began searching for a full time job beginning of 2022.
                            I worked full time at Fluent Solar, part time as a QA, and a part time student at MTECH.
                        </p>
                        <p>
                            The interviewing process was rigorous  and competitive. Luckily, out of 50 applicants, me and four other students were selected.
                            Everyday, for five months, I would scan code and report errors to their development team.
                        </p>
                        <p>
                            This gave me a first hand experience with programming that I will never forget.
                        </p>

                        <h3> Technical Support </h3>
                        <image src='./images/fluentsolar.png' className="exp-img" />
                        <h6> Fluent Solar </h6>
                        <h6> January 2022 - August 2022 </h6>


                        <p>
                            This was my first ever full time job at the young age of 17. I was and still am very grateful for the consistency this job gave me.
                            Everyday, customers would call in needing to troubleshoot their solar system, I was that helping hand for them on a small team of two.
                        </p>

                        <h3> Customer Service Representative </h3>
                        <image src='./images/ppc.png' className="exp-img" />
                        <h6> Preventive Pest Control </h6>
                        <h6> August 2022 - Present </h6>


                        <p>
                            After leaving Fluent Solar because they couldn't give me the part time hours needed for school,
                            I found Preventive Pest Control. This small local pest control company has been like a second home for me.
                            The job is easy, flexible, yet consistent. Perfect for a part time job to help me get through school without worry. The small team of five I work on has been a blessing. We all get along
                            like friends, and work together as a team like one.
                        </p>

                    </div>

                </div>

                <div className="hea-p-flex media-div">

                <div className="logo-container">
                    <div className="box1"> </div>
                    <div className="box5"> </div>
                    <h2 id="jump-med" className="head-wrap"> Media  </h2>
                </div>

                    <div className="about-d-4">
                        <h3> follow me! </h3>
                        <h3> LinkedIn </h3>
                        <img src="./images/linked.png" className="med-img" />
                        <h3> GitHub </h3>
                        <img src="./images/linked.png" className="med-img" />

                        <h3> Other? </h3>
                        <i> </i>
                        <a href=""> linkedin </a>

                    </div>

                </div>



            </div>

        </div>

        <footer>
            <img src='./images/logo1.png' alt='logo not found' id='logo-image' />
            <Link to={'/'} style={{ textDecoration: 'none', color: '#a9c7ac', fontSize: '20px' }} className='foot-lnk' > home </Link>
            <Link to={'/contact-me'} style={{ textDecoration: 'none', color: '#a9c7ac', fontSize: '20px' }} className='foot-lnk'> contact </Link>
            <Link to={'/portfolio'} style={{ textDecoration: 'none', color: '#a9c7ac', fontSize: '20px' }} className='foot-lnk'> portfolio </Link>
        </footer>
    </>
}

export default About;