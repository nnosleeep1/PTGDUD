import { useState } from "react"
import "./lab3.css"


const Lab03=()=>{
    const [so1, setSo1] = useState("")
  const [so2, setSo2] = useState("")
  const [phepTinh , setPhepTinh] = useState("")
  const [result, setResult] = useState("")

  const layPT=(e)=>{
    setPhepTinh(e.target.value)
   
  }
  console.log(phepTinh)
  const handelClick=()=>{
    if(phepTinh=='1')
   setResult(parseInt(so1)+parseInt(so2))
  else if(phepTinh=='2')
   setResult(parseInt(so1)-parseInt(so2))
  else if(phepTinh=='3')
   setResult(parseInt(so1)*parseInt(so2))
   else if(phepTinh=='4')
   setResult(parseInt(so1)/parseInt(so2))
  }


  return (
    <>
      <input type="text" name="" id="" placeholder='input A' onChange={(e)=>{
        setSo1(e.target.value)
      }}/> <br />
      <input type="text" name="" id="" placeholder='input B' onChange={(e)=>{
        setSo2(e.target.value)}} />
    <br />
        <input onChange={layPT} type="radio" name="gr" id="" value='1'/>+
        <input onChange={layPT} type="radio" name="gr" id="" value='2' />-
        <input onChange={layPT} type="radio" name="gr" id="" value='3' />*
        <input onChange={layPT} type="radio" name="gr" id="" value='4' />/
        <br />
      <button onClick={handelClick}>Click</button>
      <p>Result is: {result}</p>
    </>
  )

}
export default Lab03