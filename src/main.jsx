import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

// Render the app inside the root div in index.html.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the app in BrowserRouter so the page links work. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
