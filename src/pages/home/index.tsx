import { useRef, useEffect } from 'react'
import { Link } from 'react-router'
import { CtaCard, IntroCard, T } from '../../components'
import Card from '../../components/Card'
import styles from './Home.module.css'
import ProjectCard from '../../components/projectCard'
import { gsap, ScrollTrigger } from '../../lib/gsap'

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleBlockRef = useRef<HTMLDivElement>(null)
  const cards1Ref = useRef<HTMLDivElement>(null)
  const cards2Ref = useRef<HTMLDivElement>(null)
  const projectsTextRef = useRef<HTMLDivElement>(null)
  const projectsGridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 })

      tl.from(titleBlockRef.current, {
        y: 90,
        opacity: 0,
        duration: 1.1,
        ease: 'power4.out',
      })

      if (cards1Ref.current?.children.length) {
        tl.from(Array.from(cards1Ref.current.children), {
          y: 60,
          opacity: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
        }, '-=0.65')
      }

      if (cards2Ref.current?.children.length) {
        tl.from(Array.from(cards2Ref.current.children), {
          y: 60,
          opacity: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
        }, '-=0.55')
      }

      gsap.from(projectsTextRef.current, {
        scrollTrigger: {
          trigger: projectsTextRef.current,
          start: 'top 82%',
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })

      if (projectsGridRef.current?.children.length) {
        gsap.from(Array.from(projectsGridRef.current.children), {
          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: 'top 80%',
          },
          y: 80,
          opacity: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
        })
      }
    }, containerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.hero}>
        <div ref={titleBlockRef}>
          <div className={styles.title}>
            <span className={styles.line}></span>
            <T variant='p' size='m1' font='mono' color='violet'>
              Creative Engineering // System Architecture
            </T>
          </div>
          <T variant='h1' size='biggest' font='sans' color='primary' weight='black'>
            CRAFTING DIGITAL CHAOS INTO CODE
          </T>
        </div>

        <div className={styles.cards} ref={cards1Ref}>
          <IntroCard
            sections={[
              { label: 'RUST / WASM', color: '#8FF5FF' },
              { label: 'NEXT.JS', color: '#C97CFF' },
              { label: 'TYPESCRIPT', color: '#E9FFBA' },
            ]}
            icon={<img src='/icons/terminal.svg' alt='Terminal Icon' />}
          >
            I'm a Fullstack Architect based in the void. I build high performance interfaces
            that bridge the gap between human intuition and machine efficiency.
          </IntroCard>
          <CtaCard
            link='/projects'
            linkText='EXPLORE MY WORK'
            icon='/icons/arrow-right.svg'
            bgColor='#E9FFBA'
            shadowColor='#AA30FA'
            textColor='#2C2C2C'
          >
            READY TO SEE THE RESULTS?
          </CtaCard>
        </div>

        <div className={styles.cards} ref={cards2Ref}>
          <Card text='OPERATIONAL STATUS'>
            AVAILABLE FOR HIRE
          </Card>
          <Link to='/project/01' className={styles.visualElement}>
            <T>SYSTEM_LOG: 0xFF12</T>
            <img src='/images/image.png' alt='project' />
          </Link>
        </div>
      </div>

      <div className={styles.projects}>
        <div className={styles.text} ref={projectsTextRef}>
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
        <div className={styles.projectsGrid} ref={projectsGridRef}>
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
