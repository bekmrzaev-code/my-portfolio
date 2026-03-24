// import React from 'react'
import { Link } from 'react-router'
import { CtaCard, IntroCard, T } from '../../components'
import Card from '../../components/Card'
import styles from './Home.module.css'
import ProjectCard from '../../components/projectCard'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>   
        <div>
          <T variant="p" size="m1" font='mono' color='violet'>
            Creative Engineering // System Architecture
          </T>
          <T variant='h1' size='biggest' font='sans' color='primary' weight='black'> 
            CRAFTING DIGITAL CHAOS INTO CODE
          </T>
        </div>
        <div className={styles.cards}>
            <IntroCard 
              sections={[
                { label: 'RUST / WASM', color: '#8FF5FF' },
                { label: 'NEXT.JS', color: '#C97CFF' },
                { label: 'TYPESCRIPT', color: '#E9FFBA' },
              ]}
              icon={<img src="/icons/terminal.svg" alt="Terminal Icon" />}
            >
              I'm a Fullstackk Architect based in the void. I build high performance interfaces that bridge the gap between human intution and machine efficiency.
            </IntroCard>
            <CtaCard
              link='/projects'
              linkText='EXPLORE MY WORK'
              icon="/icons/arrow-right.svg"  
              bgColor='#E9FFBA'
              shadowColor='#AA30FA'
              textColor='#2C2C2C'
            >
              READY TO SEE THE RESULTS?
            </CtaCard>
        </div>
        <div className={styles.cards}>
          <Card
            text='OPERATIONAL STATUS'
          >
            AVAILABLE FOR HIRE
          </Card>
          <Link to='/project/01' className={styles.visualElement}>
              <T>SYSTEM_LOG: 0xFF12</T>
            <img src="/images/image.png" alt="project" />
          </Link>
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.text}>
          <div className={styles.title}>
          <T color='primary' weight='black' font='sans' size='v5'>RECENT </T>
          <T color='secondary' weight='black' font='sans' size='v5'>ARTIFACTS</T>
          </div>
          <T color='secondary' weight='regular' size='m1' className={styles.desc}>
            A COLLECTION OF PROJECTS WHERE
            PERFORMANCE MEETS UNCONVENTIONAL
            DESIGN.
          </T>
        </div>
        <div className={styles.projectsGrid}>
          <ProjectCard
            desc='REAL-TIME BIOMETRIC DATA VIZUALIZATION ENGINE'
            year='2024'
            photo='/images/projectOne.jpg'
            color='violet'
            link='/projectOne'
          >
            NEURAL_DASHBOARD
          </ProjectCard>
          <ProjectCard
            desc='MINIMALIST TERMINAL-FIRST PORTFOLIO SYSTEM'
            year='2023'
            color='aqua'
            photo='/images/projectOne.jpg'
            link='/projectTwo'
          >
            VOID_OS
          </ProjectCard>
        </div>
      </div>
    </div>
  )
}

export default HomePage
