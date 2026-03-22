import React from 'react'
import { T } from '..'
import { Link } from 'react-router'
import styles from './CtaCard.module.css'

interface CtaCardProps {
    children: React.ReactNode,
    link: string,
    linkText: string,
    icon: string,
    bgColor?: string,
    textColor?: string,
    shadowColor?: string,
}

const CtaCard = ({ children, link, linkText, icon, bgColor, textColor, shadowColor }: CtaCardProps) => {
  return (
    <div className={styles.container} style={{ backgroundColor: bgColor, boxShadow: `6px 6px  ${shadowColor || 'rgba(0, 0, 0, 0.5)'}` }}>
      <T color={textColor} font='sans' weight='black' size='v3'>{children}</T>
      <Link to={link} target="_blank" className={styles.link}>
        <T color={textColor} font='sans' weight='black' size='m2'>{linkText}</T>
        <img src={icon} alt="Icon" />
      </Link>
    </div>
  )
}

export default CtaCard
