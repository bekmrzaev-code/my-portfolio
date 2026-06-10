import { useRef, useEffect } from 'react'
import { Link } from 'react-router'
import { Button, T } from '../../components'
import styles from './Navbar.module.css'
import { gsap } from '../../lib/gsap'

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.05,
      })
    }, navRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.container} ref={navRef}>
      <div className={styles.logo}>
        <T size='v2' weight='black'>
          <Link to='/'>BEKMIRZAYEV.DEV</Link>
        </T>
      </div>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <T variant='p' size='v1' color='secondary' weight='black'>
              <Link to='/about'>ABOUT</Link>
            </T>
          </li>
          <li>
            <T variant='p' size='v1' color='secondary' weight='black'>
              <Link to='/streak'>STREAK</Link>
            </T>
          </li>
          <li>
            <T variant='p' size='v1' color='secondary' weight='black'>
              <Link to='/projects'>PROJECTS</Link>
            </T>
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <Button>LET'S CONNECT</Button>
      </div>
    </div>
  )
}

export default Navbar
