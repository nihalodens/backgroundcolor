import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[bgColor,setbgColor] = useState("white")
    const setRed=()=>{
      setbgColor("red")
    }
    const setGreen=()=>{
      setbgColor("green")
    }
    const setBlack=()=>{
      setbgColor("black")
    }
    const setBlue=()=>{
      setbgColor("blue")
    }
  return (
    <>
      <div style={{height:"100vh",background:bgColor}} className='d-flex justify-content-center align-items-center' id='main'>
        <button onClick={setRed} className="button border rounded bg-danger mx-3 text-white">Red</button>
        <button onClick={setGreen}className="button border rounded bg-success mx-3 text-white">Green</button>
        <button onClick={setBlack}className="button border rounded bg-dark mx-3 text-white">Black</button>
        <button onClick={setBlue} className="button border rounded bg-primary mx-3 text-white">Blue</button>
      </div>
    </>
  )
}

export default App
