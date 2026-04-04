// import React from 'react'  
import { T } from '../../components'
import Border from '../../components/border'
import CodeSnippet from '../../components/code'
import SkillBar from '../../components/skill'
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
        <div className={styles.content}>
            <div className={styles.desc}>
              <CodeSnippet 
                title="Tech Stack"
                code={`const techStack = ['React', 'TypeScript', 'PostgreSQL'];`}
              />
            </div>
            <div className={styles.skillBar}>
              <div className={styles.sectionOne}>
                <SkillBar name='REACT' level={94} color='#BCFF00' />
                <SkillBar name='TYPESCRIPT' level={100} color='#8FF5FF' />
                <SkillBar name='POSTGRES' level={88} color='#C97CFF' />
              </div>
              <div className={styles.sectionTwo}>
              <SkillBar name='NODE.JS' level={90} color='#C97CFF' />
              <SkillBar name='TAILWIND' level={80} color='#BCFF00' />
              <SkillBar name='NEST.JS' level={70} color='#8FF5FF' />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About