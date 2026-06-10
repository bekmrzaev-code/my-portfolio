import { useRef, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router'
import { T } from '../../components'
import Border from '../../components/border'
import styles from './ProjectDetail.module.css'
import { gsap, ScrollTrigger } from '../../lib/gsap'

interface ProjectData {
  name: string
  year: string
  status: string
  desc: string
  fullDesc: string
  tech: string[]
  photo: string
  github: string
  live: string
  accentColor: string
  features: string[]
}

const projectsData: Record<string, ProjectData> = {
  projectOne: {
    name: 'NEURAL_DASHBOARD',
    year: '2024',
    status: 'LIVE',
    desc: 'REAL-TIME BIOMETRIC DATA VISUALIZATION ENGINE',
    fullDesc: 'A high-performance data visualization dashboard built for processing real-time biometric sensor streams. The system handles 10,000+ data points per second with sub-16ms render cycles, enabling fluid animations without frame drops. Designed for medical research environments requiring precision and zero data loss.',
    tech: ['REACT', 'TYPESCRIPT', 'WEBSOCKET', 'D3.JS', 'RUST', 'WASM'],
    photo: '/images/projectOne.jpg',
    github: '#',
    live: '#',
    accentColor: '#C97CFF',
    features: [
      'REAL-TIME DATA STREAMING VIA WEBSOCKET',
      'WASM-POWERED COMPUTATION LAYER',
      '60FPS CANVAS RENDERING ENGINE',
      'ADAPTIVE THRESHOLD ALERTING SYSTEM',
    ],
  },
  '01': {
    name: 'NEURAL_DASHBOARD',
    year: '2024',
    status: 'LIVE',
    desc: 'REAL-TIME BIOMETRIC DATA VISUALIZATION ENGINE',
    fullDesc: 'A high-performance data visualization dashboard built for processing real-time biometric sensor streams. The system handles 10,000+ data points per second with sub-16ms render cycles, enabling fluid animations without frame drops. Designed for medical research environments requiring precision and zero data loss.',
    tech: ['REACT', 'TYPESCRIPT', 'WEBSOCKET', 'D3.JS', 'RUST', 'WASM'],
    photo: '/images/projectOne.jpg',
    github: '#',
    live: '#',
    accentColor: '#C97CFF',
    features: [
      'REAL-TIME DATA STREAMING VIA WEBSOCKET',
      'WASM-POWERED COMPUTATION LAYER',
      '60FPS CANVAS RENDERING ENGINE',
      'ADAPTIVE THRESHOLD ALERTING SYSTEM',
    ],
  },
  projectTwo: {
    name: 'VOID_OS',
    year: '2023',
    status: 'LIVE',
    desc: 'MINIMALIST TERMINAL-FIRST PORTFOLIO SYSTEM',
    fullDesc: 'A terminal-emulator-inspired portfolio and personal OS simulation. Built to challenge the conventional portfolio format with a brutalist, command-line interface that communicates technical identity through interaction itself. Every command is a story; every output is a demonstration.',
    tech: ['NEXT.JS', 'RUST', 'WASM', 'FRAMER MOTION', 'MDX'],
    photo: '/images/hero.png',
    github: '#',
    live: '#',
    accentColor: '#8FF5FF',
    features: [
      'TERMINAL EMULATION IN THE BROWSER',
      'COMMAND-BASED NAVIGATION SYSTEM',
      'MARKDOWN-DRIVEN CONTENT ENGINE',
      'WASM PERFORMANCE COMPUTATION CORE',
    ],
  },
}

const statusColor = (status: string) => {
  if (status === 'LIVE') return '#AFEE00'
  if (status === 'IN_DEV') return '#C97CFF'
  return '#777575'
}

interface ProjectDetailPageProps {
  projectId?: string
}

const ProjectDetailPage = ({ projectId }: ProjectDetailPageProps) => {
  const params = useParams()
  const location = useLocation()

  const resolvedId =
    projectId ||
    params.id ||
    location.pathname.split('/').filter(Boolean).pop() ||
    'projectOne'

  const project = projectsData[resolvedId] ?? projectsData['projectOne']

  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 })

      tl.from(imageRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      if (contentRef.current?.children.length) {
        tl.from(Array.from(contentRef.current.children), {
          x: 60,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
        }, '-=0.7')
      }

      if (detailsRef.current?.children.length) {
        gsap.from(Array.from(detailsRef.current.children), {
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 80%',
          },
          y: 60,
          opacity: 0,
          duration: 0.85,
          stagger: 0.2,
          ease: 'power3.out',
        })
      }
    }, containerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [resolvedId])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.breadcrumb}>
        <Link to='/projects'>
          <T font='mono' size='m1' color='secondary'>← BACK_TO_PROJECTS</T>
        </Link>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroImage} ref={imageRef}>
          <img src={project.photo} alt={project.name} />
        </div>
        <div className={styles.heroContent} ref={contentRef}>
          <div className={styles.meta}>
            <Border color={statusColor(project.status)} type='background'>{project.status}</Border>
            <Border color='#777575' type='border'>{project.year}</Border>
          </div>
          <T variant='h1' size='v5' font='sans' weight='black'>{project.name}</T>
          <T font='mono' size='m2' color='secondary' weight='regular'>{project.desc}</T>
          <div className={styles.actions}>
            <a
              href={project.live}
              target='_blank'
              rel='noreferrer'
              className={styles.actionPrimary}
              style={{ backgroundColor: project.accentColor }}
            >
              <T font='sans' weight='black' size='m1' color='#0E0E0E'>LIVE_DEMO</T>
            </a>
            <a
              href={project.github}
              target='_blank'
              rel='noreferrer'
              className={styles.actionOutline}
              style={{ borderColor: project.accentColor }}
            >
              <T font='sans' weight='black' size='m1' color='white'>VIEW_CODE</T>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.details} ref={detailsRef}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <T size='v3' weight='black'>PROJECT_OVERVIEW</T>
            <span className={styles.line}></span>
          </div>
          <T font='mono' size='m2' color='secondary' weight='regular'>{project.fullDesc}</T>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <T size='v3' weight='black'>TECH_STACK</T>
            <span className={styles.line}></span>
          </div>
          <div className={styles.techGrid}>
            {project.tech.map((t) => (
              <Border key={t} color={project.accentColor} type='border'>{t}</Border>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <T size='v3' weight='black'>KEY_FEATURES</T>
            <span className={styles.line}></span>
          </div>
          <div className={styles.features}>
            {project.features.map((f, i) => (
              <div key={i} className={styles.feature}>
                <span className={styles.featureDot} style={{ backgroundColor: project.accentColor }} />
                <T font='mono' size='m2' weight='bold'>{f}</T>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
