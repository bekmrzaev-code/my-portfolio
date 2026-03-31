// import React from 'react'  
import { T } from '../../components'
import Border from '../../components/border'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.leftSide}>
          <Border color='#C97CFF' type='background'>
            SYSTEM_STATUS_ACTIVE
          </Border>
          <T font='sans' size='v6' weight='black'>I BUILD DIGITAL ADRENALINE.</T>
          <T font='mono' size='m3' weight='regular'>Full-stack engineer obsessed with high-performance
            micro-interactions and brutalist architecture. I don't just
            write code; I orchestrate logic into visual kinetic energy.
          </T>
          <div className={styles.infoBlocks}>
            <Border color='#8FF5FF' type='border'>
              BASE: NYC/REMOTE
            </Border>
            <Border color='#C97CFF' type='border'>
              EXP: 4+ YEARS
            </Border>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src='/images/hero.png' alt='hero' />
        </div>
      </div>
      <div className={styles.techStack}>
        <div className={styles.title}>
          <T size='v3' weight='black' type='sans'>TECH_STACK</T>
          <span className={styles.line}></span>
        </div>
      </div>
    </div>
  )
}

export default About