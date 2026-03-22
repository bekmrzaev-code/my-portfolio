// import React from 'react'
import { T } from '..'
import styles from './IntroCard.module.css'

interface IntroCardProps {
  children: React.ReactNode,
  icon?: React.ReactNode,
  sections?: { label: string, color?: string }[],
}

const IntroCard = ({ children, sections, icon }: IntroCardProps) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <T font='mono' size='v2' weight='regular' color='white'>{children}</T>
      {sections && (
        <ul className={styles.sections}>
          {sections.map((section, index) => (
            <li
              key={index}
              className={styles.section}
              style={{ borderColor: section.color }}
            >
              <span
                className={styles.dot}
                style={{ backgroundColor: section.color }}
              />
              <T font='mono' size='m1' weight='bold' color='white'>{section.label}</T>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default IntroCard
