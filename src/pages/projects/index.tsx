import { useRef, useEffect } from 'react'
import { T } from '../../components'
import Border from '../../components/border'
import ProjectCard from '../../components/projectCard'
import styles from './Projects.module.css'
import { gsap, ScrollTrigger } from '../../lib/gsap'

const projects = [
  {
    id: 'neural-dashboard',
    name: 'NEURAL_DASHBOARD',
    year: '2024',
    desc: 'REAL-TIME BIOMETRIC DATA VISUALIZATION ENGINE',
    photo: '/images/projectOne.jpg',
    color: 'violet',
    link: '/projectOne',
    tags: ['REACT', 'TYPESCRIPT', 'WEBSOCKET'],
    status: 'LIVE',
  },
  {
    id: 'void-os',
    name: 'VOID_OS',
    year: '2023',
    desc: 'MINIMALIST TERMINAL-FIRST PORTFOLIO SYSTEM',
    photo: '/images/projectOne.jpg',
    color: 'aqua',
    link: '/projectTwo',
    tags: ['NEXT.JS', 'RUST', 'WASM'],
    status: 'LIVE',
  },
  {
    id: 'quantum-sync',
    name: 'QUANTUM_SYNC',
    year: '2024',
    desc: 'DISTRIBUTED STATE MANAGEMENT PROTOCOL',
    photo: '/images/projectOne.jpg',
    color: 'lime',
    link: '#',
    tags: ['NODE.JS', 'REDIS', 'GRPC'],
    status: 'IN_DEV',
  },
  {
    id: 'binary-forge',
    name: 'BINARY_FORGE',
    year: '2022',
    desc: 'CLI TOOLCHAIN FOR RAPID PROTOTYPING',
    photo: '/images/hero.png',
    color: 'mint',
    link: '#',
    tags: ['RUST', 'CLI', 'POSIX'],
    status: 'ARCHIVED',
  },
]

const statusColor = (status: string) => {
  if (status === 'LIVE') return '#AFEE00'
  if (status === 'IN_DEV') return '#C97CFF'
  return '#777575'
}

const ProjectsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      tl.from(headerRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from(Array.from(statsRef.current?.children ?? []), {
        scrollTrigger: { trigger: statsRef.current, start: 'top 82%' },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from(Array.from(gridRef.current?.children ?? []), {
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out',
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
        <div className={styles.headerRow} ref={headerRef}>
          <div className={styles.titleBlock}>
            <Border color='#C97CFF' type='background'>ARTIFACT_ARCHIVE</Border>
            <T variant='h1' size='v6' font='sans' weight='black'>ALL_ARTIFACTS</T>
          </div>
          <div className={styles.desc}>
            <T font='mono' size='m1' color='secondary'>EVERY PROJECT IS A SYSTEM.</T>
            <T font='mono' size='m1' color='secondary'>EVERY SYSTEM HAS A PURPOSE.</T>
            <T font='mono' size='m1' color='secondary'>EVERY PURPOSE HAS A COST.</T>
          </div>
        </div>
        <div className={styles.stats} ref={statsRef}>
          <div className={styles.stat}>
            <T font='mono' size='v5' weight='black' color='primary'>04</T>
            <T font='mono' size='m1' color='secondary'>TOTAL_PROJECTS</T>
          </div>
          <div className={styles.stat}>
            <T font='mono' size='v5' weight='black' color='violet'>3+</T>
            <T font='mono' size='m1' color='secondary'>YEARS_SHIPPING</T>
          </div>
          <div className={styles.stat}>
            <T font='mono' size='v5' weight='black' color='aqua'>∞</T>
            <T font='mono' size='m1' color='secondary'>PROBLEMS_SOLVED</T>
          </div>
        </div>
      </div>

      <div className={styles.projectsSection}>
        <div className={styles.sectionTitle}>
          <T size='v3' weight='black'>PROJECTS_LOG</T>
          <span className={styles.line}></span>
        </div>
        <div className={styles.grid} ref={gridRef}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectItem}>
              <ProjectCard
                desc={project.desc}
                year={project.year}
                photo={project.photo}
                color={project.color}
                link={project.link}
              >
                {project.name}
              </ProjectCard>
              <div className={styles.projectMeta}>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <Border key={tag} color='#777575' type='border'>{tag}</Border>
                  ))}
                </div>
                <Border color={statusColor(project.status)} type='border'>
                  {project.status}
                </Border>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
