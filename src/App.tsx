// import React from 'react'
import { Route, Routes } from "react-router"
import { Main } from "./layout"

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
    </Routes>
  )
}

export default App
