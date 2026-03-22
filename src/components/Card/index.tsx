import React from 'react'
import { T } from '..'
import styles from './Card.module.css'

interface CardProps {
    children: React.ReactNode,
    text: string
    bgColor?: string
    borderColor?: string
}

const Card: React.FC<CardProps> = ({
    children, text, bgColor, borderColor
}) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor, borderBottomColor: borderColor}}>
        <T font='mono' size='m1' weight='regular' color='secondary'>{text}</T>
        <div className={styles.content}>
            <span
                className={styles.dot} 
            />
            <T font='mono' size='v2' weight='bold'>{children}</T>
        </div>
    </div>
  )
}

export default Card
