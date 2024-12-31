import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [color,setColor] = useState("orange")

const changeColor = (color) =>{
    setColor(color)
}
  return (
    
     <div className='w-full h-screen duration-200'
     style = {{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2'>
          <button onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:'red'}}>Red</button>
          <button onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:'Green'}}>Green</button>
          <button onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:'Blue'}}>Blue</button>
          <button onClick={() => setColor('Olive')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:'Olive'}}>Olive</button>
          <button onClick={() => setColor('Gray')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:'Gray'}}>Gray</button>
          <button onClick={() => setColor('Yellow')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:'Yellow'}}>Yellow</button>
          <button onClick={() => setColor('Pink')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:'Pink'}}>Pink</button>
          <button onClick={() => setColor('Purple')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:'Purple'}}>Purple</button>
          <button onClick={() => setColor('lavender')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:'Lavender'}}>Lavender</button>
          <button onClick={() => setColor('white')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:'white'}}>white</button>
          <button onClick={() => setColor('black')}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:'Black'}}>Black</button>
        </div>
      </div>

     </div>
    
  )
}

export default App
