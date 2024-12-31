import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10)
  const addValue = () => {
    
    if (counter<20) {
      setCounter(counter+1);
      
    } else {
      alert('Value should not exceed 20')
      return;
    }
  }
    const removeValue = () => {
    if (counter>0) {
      setCounter(counter-1);
      
    } else {
      alert('Value should not be less than  0')
      return;
    }
  }
  return (
    <>
      
       <h1>Counter Project</h1>
       <h2>Counter Value : {counter}</h2>
       <button
       onClick={addValue}>Add Value </button>{counter}
       <br/>
       <button 
       onClick={removeValue}>Remove Value </button>{counter}
       
       
    </>
  )

}
export default App
