import React from 'react'
import Home from './Components/Mainpahe/Home'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Services from './Components/Services/Services'
import Project from './Components/Project/Project'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/service' element={<Services/>} />
          <Route exact path='/project' element={<Project/>} />
          <Route exact path='/contact' element={<Contact/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
