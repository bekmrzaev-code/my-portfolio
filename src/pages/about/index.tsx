// import React from 'react'  
import { T } from '../../components'
import Border from '../../components/border'

const About = () => {
  return (
    <div>
      <div className='.hero'>
        <div>
          <Border color='#C97CFF'>SYSTEM_STATUS_ACTIVE</Border>
          <T font='sans' size='v6' weight='black'>I BUILD DIGITAL ADRENALINE.</T>
          <T font='mono' size='m3' weight='regular'>Full-stack engineer obsessed with high-performance
            micro-interactions and brutalist architecture. I don't just
            write code; I orchestrate logic into visual kinetic energy.
          </T>
          <div>
            <Border color='#8FF5FF'>BASE: NYC/REMOTE</Border>
            <Border color='#C97CFF'>EXP: 4+ YEARS</Border>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="techStack">
        <T>TECH_STAK</T>
      </div>
    </div>
  )
}

export default About
