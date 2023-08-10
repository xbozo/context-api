import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { BulbProvider } from './contexts/UserContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BulbProvider>
      <App />
    </BulbProvider>
  </React.StrictMode>,
)
