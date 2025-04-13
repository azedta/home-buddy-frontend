import React, { useState } from 'react'
import './App.css'
import Medications from './components/medications/Medications'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/shared/Navbar'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Treatment from './components/treatment/Treatment'
import LogIn from './components/auth/Login'
import PrivateRoute from './components/PrivateRoute.jsx'
import Register from './components/auth/Register.jsx'
import Checkout from './components/checkout/Checkout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/medications' element={<Medications />} />
          <Route path='/contact' element={<Contact />} />
          

          <Route path='/' element={<PrivateRoute />}>
            <Route path='/checkout' element={ <Checkout />}/>
            <Route path='/treatment' element={<Treatment />} />
          </Route>

          <Route path='/' element={<PrivateRoute publicPage />}>
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={ <Register />}/>
          </Route>
        </Routes>
      </Router>
      <Toaster position='bottom-center' />
    </React.Fragment>

  )
}

export default App





