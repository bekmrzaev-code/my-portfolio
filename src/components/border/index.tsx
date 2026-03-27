import React from 'react'
import { T } from '..'
import style from './Border.module.css'


interface BorderProps {
    children: React.ReactNode
    color: string
}

const Border: React.FC<BorderProps> = ({ children, color}) => {
  return (
    <div className={style.container}>
      <span style={{ backgroundColor: color}}></span>
      <T font='mono' size='m1' weight='bold'>{children}</T>
    </div>
  )
}

export default Border
