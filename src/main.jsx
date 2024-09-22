import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartContext from "./Context/CartContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContext>
    <App />
    </CartContext>
  </StrictMode>,
)
