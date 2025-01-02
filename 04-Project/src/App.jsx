import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [length, setLength] = useState(8)
  const [char, setChar] = useState(false)
  const [num, setNum] = useState(false)
  const[password,setPassword] = useState("")

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
     let pass = "" 
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if (num) str+="0123456789"
     if (char) str+="!@#$%^&*()~{}[]`"
     for (let i = 1; i <= length; i++) {
        let charpass = Math.floor(Math.random()*str.length + 1)
        pass += str.charAt(charpass)
      }
      setPassword(pass)
  },[length,num,char,setPassword])

useEffect(() => {
  passwordGenerator()
},[length,num,char,passwordGenerator])

const copytoclipboard = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)
},[password])


  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg
px-4 py-8 text-orange-500 bg-gray-700 mt-8'>
  <div className=' flex-shadow rounded-md overflow-hidden mb-4'>
    <input type="text" 
    value={password}
    placeholder='Password'
    className='outline-none  py-1 px-3'
    readOnly
    ref={passwordRef}
    />
    <button
    onClick={copytoclipboard}
    className='outline-none bg-blue-700 text-white px-3 py-1 ' 
    >Copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range" 
      min={6}
      max={50}
      value={length}
      className='cursor-ponter'
      onChange={(e)=>setLength(e.target.value)}/>
      <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked = {char}
      id="charCheckbox" 
  
        onChange={() => setChar((prev)=>!prev)}
        /><label>characters</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked = {num}
      id="numCheckbox" 
  
        onChange={() => setNum(prev=>!prev)}
        /><label>Numbers</label>
      </div>

      </div>
  </div>
    </>
  )
}

export default App
