// import React from 'react'
import { CtaCard, IntroCard, T } from '../../components'
import styles from './Home.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>   
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
      </div>
      <div className={styles.bottom}>
      </div>
    </div>
  )
}

export default HomePage
