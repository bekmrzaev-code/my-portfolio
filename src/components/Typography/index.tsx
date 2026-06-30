import React from 'react'
import styles from './typography.module.css'

interface TypographyProps {
  children: string;
}

const Typography: React.FC<TypographyProps> = ({
  children
}) => {
  return (
    <p className={styles.text}>
      {children}
    </p>
  )
}

export default Typography