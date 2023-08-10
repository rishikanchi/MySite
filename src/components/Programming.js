import { React } from 'react';
import "./Programming.css";
import ProgressBar from "./ProgressBar.js" 
import DigitalScholars from './DigitalScholars';

function Programming() {
    return (
        <div id="Programming" className='section'>
            <div id='ProgTitle' className='title'>My Programming</div>
            <center><button id='githubBtn' className='button' onClick={() => {window.open('https://github.com/rishikanchi', "_blank")}}>MY GITHUB</button></center>
            <div id='skillsBox'>
                <div className='halfBox'>
                    <ProgressBar title='HTML, CSS, & JS' percent='90%'/>
                    <ProgressBar title='React' percent='80%'/>
                    <ProgressBar title='Swift' percent='60%'/>  
                </div>

                <div className='halfBox'>
                    <ProgressBar title='Python' percent='70%'/>
                    <ProgressBar title='Data Analysis and Visualization' percent='90%'/>
                    <ProgressBar title='Firebase' percent='50%'/>
                </div>
            </div>

            <DigitalScholars />
        </div>
    )
}

export default Programming;