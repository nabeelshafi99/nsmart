import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from './Context/UserContext' 
import CartContext from './Context/CartContext' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
    <CartContext>
    <App />
    </CartContext>
    </UserContext>
  </StrictMode>,
)
