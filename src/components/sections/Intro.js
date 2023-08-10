import "./Intro.css";
import { React } from 'react'
/*You can only do ../ maximum, you can never do .../ or more dots*/
import rishi_nobg from "../../images/rishi_nobg.png"
import Typewriter from 'typewriter-effect';


function Intro() {

    const DOT = "<span id='dot'></span>"
    
    return (
        <div id='Intro' className='section sectionFlexSimple'>
            <div id="nameCont">
                <div className='hello'>Hello, my name is</div>
                <h1 className="title" style={{marginTop: '0'}}>Rishi Kanchi<span id='dot'></span></h1>
                <div className='hello'>I am a</div>
                <span className="title" style={{fontSize: '62px', margin: 0}}><Typewriter
                    options={{
                        strings: [
                                    'Web Developer' + DOT,
                                    'Scholar' + DOT, 
                                    'Mathlete' + DOT, 
                                    'Chess Player' + DOT,
                                    'Roboticist' + DOT,
                                    'Teacher' + DOT,
                                    'Data Scientist' + DOT,
                                    'Musician' + DOT,
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