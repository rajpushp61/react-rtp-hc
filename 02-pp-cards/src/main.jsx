import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App username = "Rahul"role="Frontend devleoper"/>
    <App username="Pushp" role="backend developer" />
    <App  username='Prashnat'role='Software Engineer'/>
  </StrictMode>,
)
