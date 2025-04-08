import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Analytic from './pages/Analytic'
import Integration from './pages/Integration'
import Message from './pages/Message'
import Project from './pages/Project'
import Teams from './pages/Teams'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/analytic' element={<Analytic/> }/>
        <Route path='/integration' element={<Integration/> }/>
        <Route path='/message' element={<Message/> }/>
        <Route path='/project' element={<Project/> }/>
        <Route path='/teams' element={<Teams/> }/>
       </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
