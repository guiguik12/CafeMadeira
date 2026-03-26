import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'  // ← CAMINHO CORRETO agora!
import './styles/tailwind.css'  // Tailwind também

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
