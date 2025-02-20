import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [name, setName] = useState("")
  const handelClick=()=>{
    
    const print="hello "+ name
    return print;
  }
  return (
    <>
      <input type="text" 
      onChange={(e)=>{ setName(e.target.value) }}
      />
      <button
      onClick={handelClick()}
      >submit</button>
      <p>{"hello "+name}</p>
      
    </>
  )
}

export default App
