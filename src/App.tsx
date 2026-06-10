import { Route, Routes } from 'react-router'
import { Main } from './layout'
import { Analytics } from '@vercel/analytics/react'
import Cursor from './components/cursor'

const App = () => {
  return (
    <>
      <Cursor />
      <Routes>
        <Route path='/*' element={<Main />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
