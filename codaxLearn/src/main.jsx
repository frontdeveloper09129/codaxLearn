import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// 1. Add this import statement

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
        <App />
    </StrictMode>
  </BrowserRouter>
)
