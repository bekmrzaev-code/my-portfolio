import React from 'react'
import styles from './button.module.css'

type Variant = 'green' | 'blue' | 'glow'

interface ButtonProps {
    children: React.ReactNode;
    variant?: Variant;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant,
}) => {
  const buttonStyle = variant ? styles[variant] : styles.container

  return (
    <button className={buttonStyle}>
      {children}
    </button>
  )
}

export default Button
