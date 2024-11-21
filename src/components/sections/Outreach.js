import React from 'react';
import "./Outreach.css";
import Card from '../subcomponents/Card';

import mwmc_logo from "../../images/mwmc_logo.jpg";
import chesspupils_logo from "../../images/chesspupils_logo.png";
import vkk_logo from "../../images/vkk_logo.png";
import code211_logo from "../../images/code211_logo.png";
import fremdhacks_logo from "../../images/fremdhacks_logo.png";
import nhs_logo from "../../images/nhs_logo.png";
import FadeIn from '../subcomponents/FadeIn';

export default function Outreach() {
  return (
    <div id='Outreach' className='section'>
        <div id='orgTitleCont'>
            <FadeIn>
              <div className='titleDesc'>GIVING BACK</div>
            </FadeIn>
            <FadeIn>
              <div id='orgTitle' className='title'>Outreach</div>
            </FadeIn>
        </div>

        <div id='orgCont'>
            <Card name='Chess Pupils' position='Co-President' image={chesspupils_logo} link='https://chess.thepuzzlr.com/' delay={400}/>
            <Card name='Midwest Math Circle' position='President' image={mwmc_logo} link='https://mwmathcircle.org' delay={550}/>
            <Card name='Vidyaranya Kannada Kuta' position='Youth Committee Captain' image={vkk_logo} link='https://www.vidyaranyakannadakuta.org/' delay={700}/>
            <Card name='Code211' position='Co-Director' image={code211_logo} link='https://v-paritosh.github.io/Code211-2024/' delay={450}/>
            <Card name='Fremd Hacks' position='Co-Founder' image={fremdhacks_logo} link='https://fremdhacks.com/' delay={600}/>
            <Card name='National Honor Society' position='Officer' image={nhs_logo} link='https://www.nationalhonorsociety.org/' delay={750}/>
        </div>
    </div>
  )
}
