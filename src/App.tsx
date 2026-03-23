// import React from 'react'
import { Route, Routes } from "react-router"
import { Main } from "./layout"
import { Analytics } from '@vercel/analytics/react'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
