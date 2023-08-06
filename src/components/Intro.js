import "./Intro.css";
import { React, useState } from 'react'
import rishi_nobg from "../images/rishi_nobg.png";
import Typewriter from 'typewriter-effect';


function Intro() {

    return (
        <div id='intro'>
            <div id="nameCont">
                <div className='hello'>Hello, my name is</div>
                <h1 className="name" style={{marginTop: '0'}}>Rishi Kanchi<span id='dot'></span></h1>
                <div className='hello'>I am a</div>
                <span className="name" style={{fontSize: '62px', margin: 0}}><Typewriter
                    options={{
                        strings: [
                                    'Web Developer' + "<span id='dot'></span>",
                                    'Scholar' + "<span id='dot'></span>",
                                    'Mathlete' + "<span id='dot'></span>", 
                                    'Teacher' + "<span id='dot'></span>",
                                    'Chess Player' + "<span id='dot'></span>",
                                    'Volunteer' + "<span id='dot'></span>",
                                    'Data Scientist' + "<span id='dot'></span>",
                                    'Innovator' + "<span id='dot'></span>",
                                    'Roboticist'+ "<span id='dot'></span>"
                                ],
                        autoStart: true,
                        loop: true,
                    }}
                /></span>
            </div>
            <div id='picCont'>
                <img src={rishi_nobg} id="headshot" alt="Rishi Kanchi Headshot"></img>
            </div>
        </div>
    )
}

export default Intro;