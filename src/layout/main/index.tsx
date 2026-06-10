// import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

import styles from './Main.module.css'
import { AboutPage, HomePage, ProjectsPage, StreakPage, ProjectDetailPage } from '../../pages'
import { Route, Routes } from 'react-router'

const Main = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/streak" element={<StreakPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projectOne" element={<ProjectDetailPage projectId="projectOne" />} />
          <Route path="/projectTwo" element={<ProjectDetailPage projectId="projectTwo" />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default Main
