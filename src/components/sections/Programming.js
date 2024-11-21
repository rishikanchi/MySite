import { React } from 'react';
import "./Programming.css";
import ProgressBar from "../subcomponents/ProgressBar" 
import DigitalScholars from './DigitalScholars';
import FadeIn from '../subcomponents/FadeIn';

function Programming() {
    return (
        <div id="Programming" className='section'>
            <FadeIn delay={400}>
                <div id='ProgTitle' className='title'>My Programming</div>
            </FadeIn>
            <FadeIn delay={400}>
                <center><button id='githubBtn' className='button' onClick={() => {window.open('https://github.com/rishikanchi', "_blank")}}>MY GITHUB</button></center>
            </FadeIn>
            <div id='skillsBox'>
                <div className='halfBox'>
                    <ProgressBar title='Artificial Intelligence' percent='50%' delay={500}/>
                    <ProgressBar title='HTML, CSS, & JS' percent='90%' delay={600}/>
                    <ProgressBar title='React' percent='80%' delay={700}/>
                    <ProgressBar title='Swift' percent='60%' delay={800}/>
                </div>
                <div className='halfBox'>
                    <ProgressBar title='Python' percent='70%' delay={500}/>
                    <ProgressBar title='Data Analysis and Visualization' percent='90%' delay={600}/>
                    <ProgressBar title='MongoDB' percent='50%' delay={700}/>
                    <ProgressBar title='Kotlin' percent='70%' delay={800}/>  
                </div>
            </div>

            <DigitalScholars />
        </div>
    )
}

export default Programming;