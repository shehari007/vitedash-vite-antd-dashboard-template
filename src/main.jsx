import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeModeProvider } from './context/ThemeModeContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <App />
    </ThemeModeProvider>
  </React.StrictMode>,
)
