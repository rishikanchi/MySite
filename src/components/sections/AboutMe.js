import "./AboutMe.css";
import { React } from 'react';
import FadeIn from "../subcomponents/FadeIn"


function AboutMe() {

    return (
        <div id='AboutMe' className='section sectionFlexSimple'>
            <div id="aboutTitleCont">
                <FadeIn>
                    <div id="aboutTitle" className="title">About Me</div>
                </FadeIn>
                <FadeIn>
                    <button className="button" onClick={() => {window.open('https://www.linkedin.com/in/rishi-kanchi/', '_blank')}}>MY LINKEDIN</button>
                </FadeIn>
            </div>
            <FadeIn delay={500}>
                <div className='text' id="aboutText">
                    I am Rishi Kanchi, a dedicated high school student with a consistent 4.0 unweighted GPA. Armed with a solid academic foundation, I thrive in critical thinking and complex problem-solving. As a dedicated learner, I am driven by a desire for continuous growth. My fascination with mathematics drives my curiosity and analytical skills, while my affinity for technology and computer science fuels innovation and creativity. Rooted in my cultural values, I am committed to making a positive impact in both my academic pursuits and the broader community.
                </div>
            </FadeIn>
        </div>
    )
}

export default AboutMe;
