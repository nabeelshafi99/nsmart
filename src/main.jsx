import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from './Context/UserContext' 
import CartContext from './Context/CartContext' 
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <UserContext>
    <CartContext>
    <App />
    </CartContext>
    </UserContext>
    </QueryClientProvider>
  </StrictMode>,
)
