import React from 'react'
import "./Card.css"
import FadeIn from './FadeIn'

export default function Card(props) {
  return (
    <FadeIn delay={props.delay} translateY={35}>
      <div id='Card' alt={'Rishi Kanchi ' + props.name} style={{backgroundImage: `url(${props.image})`}} onClick={() => window.open(props.link, '_blank')}>
        <div id='overlay'>
          <div id='orgPos' className='titleDesc'>{props.position}</div>
          <div id='orgName' className='text'>{props.name}</div>
        </div>
      </div>      
    </FadeIn>
  )
}
