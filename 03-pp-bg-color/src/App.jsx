import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    
    <div className='w-full h-screen'
    style={{backgroundColor:color}}>
    {/* <h1>This is a bg-color changing project</h1> */}
    <div className=' fixed flex flex-wrap justify-center gap-2 mt-2 rounded-md ml-4'style={{backgroundColor:"white"}}>
      <div>
        <button style={{backgroundColor:"red"}} onClick={() => setColor("red")}>red</button>
        </div>
      <div>
        <button style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>blue</button>
        </div>
      <div >
        <button style={{backgroundColor:"green"}} onClick={() => setColor("green")}>green</button>
        </div>
      <div >
        <button style={{backgroundColor:"yellow"}}  onClick={() => setColor("yellow")}>yellow</button>
      </div>
    </div>
    </div>
     
   
  )
}

export default App
