import React from 'react'
import styles from './button.module.css'

interface ButtonProps {
    children: string;
}

const Button: React.FC<ButtonProps> = ({
    children
}) => {
  return (
    <button className={styles.container}>{children}</button>
  )
}

export default Button