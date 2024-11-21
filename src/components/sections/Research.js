import { React } from 'react';
import "./Research.css";
import RISE from './RISE';
import FadeIn from '../subcomponents/FadeIn';

function Research() {
    return (
        <div id="Research" className='section'>
            <FadeIn>
                <center><div id="ProgTitleDesc" className="titleDesc">SCIENTIFIC DISCOVERY</div></center>
            </FadeIn>
            <FadeIn>
                <div id='ProgTitle' className='title'>My Research</div>
            </FadeIn>
            <RISE />
        </div>
    )
}

export default Research;