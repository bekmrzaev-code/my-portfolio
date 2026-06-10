import { useRef, useEffect } from 'react'
import { T } from '../../components'
import Border from '../../components/border'
import CodeSnippet from '../../components/code'
import SkillBar from '../../components/skill'
import styles from './About.module.css'
import { gsap, ScrollTrigger } from '../../lib/gsap'

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const techStackRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      if (leftRef.current?.children.length) {
        tl.from(Array.from(leftRef.current.children), {
          x: -60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
        })
      }

      tl.from(rightRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.7')

      gsap.from(techStackRef.current, {
        scrollTrigger: {
          trigger: techStackRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })

      if (skillsRef.current?.children.length) {
        gsap.from(Array.from(skillsRef.current.children), {
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
        })
      }

      // Animate skill bar fills from 0 to their target width
      ScrollTrigger.create({
        trigger: skillsRef.current,
        start: 'top 75%',
        onEnter: () => {
          const fills = skillsRef.current?.querySelectorAll('[data-skill-fill]')
          fills?.forEach((fill, i) => {
            gsap.from(fill, {
              width: 0,
              duration: 1.4,
              delay: i * 0.08,
              ease: 'power3.out',
            })
          })
        },
      })
    }, containerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.hero}>
        <div className={styles.leftSide} ref={leftRef}>
          <Border color='#C97CFF' type='background'>SYSTEM_STATUS_ACTIVE</Border>
          <T font='sans' size='v6' weight='black'>I BUILD DIGITAL ADRENALINE.</T>
          <T font='mono' size='m3' weight='regular'>
            Full-stack engineer obsessed with high-performance
            micro-interactions and brutalist architecture. I don't just
            write code; I orchestrate logic into visual kinetic energy.
          </T>
          <div className={styles.infoBlocks}>
            <Border color='#8FF5FF' type='border'>BASE: NYC/REMOTE</Border>
            <Border color='#C97CFF' type='border'>EXP: 4+ YEARS</Border>
          </div>
        </div>
        <div className={styles.rightSide} ref={rightRef}>
          <img src='/images/hero.png' alt='hero' />
        </div>
      </div>

      <div className={styles.techStack} ref={techStackRef}>
        <div className={styles.title}>
          <T size='v3' weight='black' type='sans'>TECH_STACK</T>
          <span className={styles.line}></span>
        </div>
        <div className={styles.content}>
          <div className={styles.desc}>
            <CodeSnippet
              title='Tech Stack'
              code={`const techStack = ['React', 'TypeScript', 'PostgreSQL'];`}
            />
          </div>
          <div className={styles.skillBar} ref={skillsRef}>
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
