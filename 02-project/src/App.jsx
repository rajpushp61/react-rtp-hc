import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
      <h1 className='bg-red-400 text-3xl'>This is a card project.</h1>
      <br />
      <Card name = "Rahul Jha" role={"Software Developer"}/>
      <br />
      <Card name = "Pushp Raj" role={"FrontEnd Developer"}/>
    </>
  )
}

export default App
