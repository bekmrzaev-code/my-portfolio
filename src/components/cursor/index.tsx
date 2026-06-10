import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import styles from './Cursor.module.css'

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current!
    const ring = ringRef.current!

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -200, y: -200 })

    const onMove = (e: MouseEvent) => {
      gsap.to(dot,  { x: e.clientX, y: e.clientY, duration: 0.08, ease: 'none' })
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.38, ease: 'power2.out' })
    }

    const onOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest('a, button')
      if (target) {
        gsap.to(ring, { scale: 2, borderColor: '#C97CFF', duration: 0.3, ease: 'power2.out' })
        gsap.to(dot,  { scale: 0.4, duration: 0.3 })
      }
    }

    const onOut = (e: MouseEvent) => {
      const target = (e.target as Element).closest('a, button')
      if (target) {
        gsap.to(ring, { scale: 1, borderColor: '#AFEE00', duration: 0.3, ease: 'power2.out' })
        gsap.to(dot,  { scale: 1, duration: 0.3 })
      }
    }

    const onDown = () => gsap.to(ring, { scale: 0.75, duration: 0.15 })
    const onUp   = () => gsap.to(ring, { scale: 1,    duration: 0.25, ease: 'elastic.out(1.2, 0.5)' })

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseout',   onOut)
    document.addEventListener('mousedown',  onDown)
    document.addEventListener('mouseup',    onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
      document.removeEventListener('mousedown',  onDown)
      document.removeEventListener('mouseup',    onUp)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}

export default Cursor
