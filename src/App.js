import React from 'react'
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';




const App = () => {
  return (
    <div>
   <Router>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects />}/>

    </Routes>
   </Router>
   
      
    </div>
  )
}

export default App

