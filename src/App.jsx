import { useState } from 'react'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Learning from './Components/Learning'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {


  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Learning/>
      <Projects/>
      <Contact/>
    </div>
    
  )
}

export default App
