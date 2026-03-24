import React from 'react'
import { T } from '..'
import styles from './projectCard.module.css'
import { Link } from 'react-router'

interface projectCardProps {
  children: React.ReactNode
  year: string
  desc: string
  photo: string
  color: string
  link: string
}

const ProjectCard: React.FC<projectCardProps> = ({ children, year, desc, photo, color, link}) => {
  return (
    <Link to={link} className={styles.container}>
      <img src={photo} alt='projectPhoto'></img>
      <div className={styles.content}>
        <div className={styles.text}>
          <T weight='black' size='v3' font='sans'>{children}</T>
          <T weight='regular' size='v1' color='secondary'>{desc}</T>
        </div>
        <T color={color}>{year}</T>
      </div>
    </Link>
  )
}

export default ProjectCard
