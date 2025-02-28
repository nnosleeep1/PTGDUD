import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [result, setResult] = useState("")
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const handleClick=()=>{
    setResult(parseInt(a)+parseInt(b))
  }

  return (
    <>
     <input placeholder='input A' type="text" name="" id="" onChange={(e)=>{
      setA(e.target.value)
     }}/> <br />
     <input placeholder='input B' type="text" name="" id="" onChange={(e)=>{
      setB(e.target.value)
     }}/> <br />
     <button onClick={handleClick}> Submit</button> <br />
     <p>Result:{result}</p>
    </>
  )
}

export default App
