import React from 'react'
import { T } from '..'
import style from './Border.module.css'

interface BorderProps {
  children: React.ReactNode
  color: string
  type: 'border' | 'background'
}

const Border: React.FC<BorderProps> = ({ children, color, type }) => {
  return (
    <div
      className={style.container}
      style={type === 'background' ? { backgroundColor: color, border: `0px` } : {}}
    >
      {type === 'border' && (
        <span style={{ backgroundColor: color }}></span>
      )}
      <T font="mono" size="m1" weight="bold" color={type === 'background' ? 'dark-gray' : 'white'}>
        {children}
      </T>

    </div>
  )
}

export default Border