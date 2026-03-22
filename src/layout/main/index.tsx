// import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

import styles from './Main.module.css'
import { HomePage } from '../../pages'
import { Route, Routes } from 'react-router'

const Main = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/streak" element={<div>Streak Page</div>} />
          <Route path="/projects" element={<div>Projects Page</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default Main
