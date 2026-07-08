// import React from 'react'
import styles from "./home.module.css"
import { Button, Card, Link, Typography } from '../../components'

const Home = () => {
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
        <div className={styles.socials}>
          <Button>Twitter</Button>
          <Button>Telegram</Button>
          <Button>Linkedin</Button>
          <Button>GitHub</Button>
        </div>
        <Typography T='display' >Display</Typography>
        <Typography T='heading'>Heading</Typography>
        <Typography T='title' >Title</Typography>
        <Typography T='body' >Body</Typography>
        <Typography T='label'>Label</Typography>
        <Typography T='caption'>Caption</Typography>
        <Button variant='glow'>Button</Button>
        <Link link='/kun.uz'>Kun Uz</Link>
        <Card></Card>
    </div>
  )
}

export default Home