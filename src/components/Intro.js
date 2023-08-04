import "./Intro.css";
import { React } from 'react'
import rishi_nobg from "../images/rishi_nobg.png";

function Intro() {
    return (
        <div id='intro'>
            <div id="nameCont">
                <div id='hello'>Hello, my name is</div>
                <div id='name' className="name">Rishi Kanchi<span id='dot' className="name"></span></div>
            </div>
            <div id='picCont'>
                <img src={rishi_nobg} id="headshot" alt="headshot"></img>
            </div>
        </div>
    )
}

export default Intro;