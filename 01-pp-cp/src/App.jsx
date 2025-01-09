import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10)
  const addValue = () => {
    if (count<20){
      count=count+1;
    setCount(count)
    }
    else 
    alert(`Value should be less than 20 now value is ${count}`)
  }
  const removeValue = () => {
    if(count >0){
      count = count -1;
    setCount(count)
    }
    else {
      alert(`value should be greater than 0 . Now value is ${count}`)
    }
  }

  return (
    <>
      <h1>This is the counter project .{count}</h1>
      <button onClick={addValue}>Increase value</button>{count}
      <br />
      <br />
      <button onClick={removeValue}>Decrease value</button>{count}
    </>
  )
}

export default App
