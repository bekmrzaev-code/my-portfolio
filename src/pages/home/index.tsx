import React from 'react'
import styles from "./home.module.css"
import { Button, Typography } from '../../components'

const index = () => {
  return (
    <div className={styles.container}>
        <h1>Hello my name is abdurahmon</h1>
        <p>About Me</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <p>My Projects</p>
        <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
        </ul>
        <Typography>Text</Typography>
        <Button>Button</Button>
    </div>
  )
}

export default index