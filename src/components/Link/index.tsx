import React from 'react'
import styles from './link.module.css'

interface LinkProps {
    children: string;
    link: string
}

const Link: React.FC<LinkProps> = ({
    link, children
}) => {
  return (
    <a 
    href={link}
    className={styles.glow}
    >{children}</a>
  )
}

export default Link