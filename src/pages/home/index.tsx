import React from 'react'
import styles from "./home.module.css"
import { Button, Card, Link, Typography } from '../../components'

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
        <p>My Blog</p>
        <ul>
          <li>blog 1</li>
          <li>blog 2</li>
          <li>blog 3</li>
        </ul>
        <p>My Socials</p>
        <ul>
          <Button>Twitter</Button>
          <Button>Telegram</Button>
          <Button>GitHub</Button>
          <Button>Linkedin</Button>
        </ul>
        <Typography>Text</Typography>
        <Button>Button</Button>
        <Link link='/kun.uz'>Kun Uz</Link>
        <Card></Card>
    </div>
  )
}

export default index