import { React } from 'react';
import "./Research.css";
import RISE from './RISE';

function Research() {
    return (
        <div id="Research" className='section'>
            <center><div id="ProgTitleDesc" className="titleDesc">SCIENTIFIC DISCOVERY</div></center>
            <div id='ProgTitle' className='title'>My Research</div>
            {/*<center><button id='githubBtn' className='button' onClick={() => {window.open('https://github.com/rishikanchi', "_blank")}}>MY GITHUB</button></center>*/}
            <RISE />
        </div>
    )
}

export default Research;