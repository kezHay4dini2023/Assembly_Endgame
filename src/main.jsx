import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainBody from './body.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <MainBody /> 
  </>,
)
