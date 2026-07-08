import React from 'react'
import styles from './typography.module.css'

interface TypographyProps {
  children: React.ReactNode;
  T?: 'display' | 'heading' | 'title' | 'body' | 'label' | 'caption'
}

const Typography: React.FC<TypographyProps> = ({
  children, T
}) => {
  const type = T ? styles[T] || styles.font : styles.font
  return (
    <p className={type}>
      {children}
    </p>
  )
}

export default Typography