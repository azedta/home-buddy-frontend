import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Medications from './components/medications/Medications'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import { Toaster } from 'react-hot-toast'
import Treatment from './components/treatment/Treatment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/medications' element={<Medications />} />
          <Route path='/treatment' element={<Treatment />} />
        </Routes>
      </Router>
      <Toaster position='bottom-center' />
    </React.Fragment>

  )
}

export default App





