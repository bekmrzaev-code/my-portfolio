// import React from 'react'
import { Link } from 'react-router'
import { T } from '../../components'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <T font='mono' size='m2'>&copy; 2026 BEKMRZAYEV_ABDURAHMON_LLC</T>
      </div>
      <div className={styles.links}>
        <ul>
            <li><T font='mono' size='m1' color='secondary'>
                <Link to="https://github.com">GITHUB</Link>
              </T></li>
            <li><T font='mono' size='m1' color='secondary'>
                <Link to="https://linkedin.com">LINKEDIN</Link>
              </T></li>
            <li><T font='mono' size='m1' color='secondary'>
                <Link to="https://telegram.org">TELEGRAM</Link>
              </T></li>
            <li><T font='mono' size='m1' color='secondary'>
                <Link to="https://read.cv">READCV</Link>
              </T></li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <T font='mono' size='m1' color='aqua'>V.1.0.42_STABLE</T>
      </div>
    </div>
  )
}

export default Footer
