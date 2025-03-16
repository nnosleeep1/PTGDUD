import { useState } from 'react'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Body from './components/body/body.jsx'


function App() {


  return (
    <div className='pl-20 pr-20'>
     <Header/>
     <Body/>
     <Footer/>
    </div>
  )
}

export default App
