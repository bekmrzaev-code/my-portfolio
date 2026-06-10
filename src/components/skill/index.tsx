import React from 'react'
import styles from './skill.module.css'
import { T } from '..'

interface SkillProps {
  name: string
  level: number
  color: string
}

const SkillBar: React.FC<SkillProps> = ({ name, level, color }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <T font='sans' weight='bold' size='m2' color='white'>{name}</T>
        <T font='mono' weight='bold' size='m1' color={color}>{`${level}%`}</T>
      </div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          data-skill-fill
          data-level={level}
          style={{ width: `${level}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

export default SkillBar
