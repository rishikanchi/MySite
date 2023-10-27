import React from 'react';
import "./Organizations.css";
import Card from '../subcomponents/Card';

import mwmc_logo from "../../images/mwmc_logo.jpg";
import chesspupils_logo from "../../images/chesspupils_logo.png";
import vkk_logo from "../../images/vkk_logo.png";

export default function Organizations() {
  return (
    <div id='Organizations' className='section'>
        <div id='orgTitleCont'>
            <div className='titleDesc'>GIVING BACK</div>
            <div id='orgTitle' className='title'>Organizations</div>
        </div>

        <div id='orgCont'>
            <Card name='Midwest Math Circle' position='President' image={mwmc_logo} link='https://mwmathcircle.org'/>
            <Card name='Chess Pupils' position='Outreach Director' image={chesspupils_logo} link='https://chess.thepuzzlr.com/'/>
            <Card name='Vidyaranya Kannada Kuta' position='Youth Committee Captain' image={vkk_logo} link='https://www.vidyaranyakannadakuta.org/'/>
        </div>
    </div>
  )
}
