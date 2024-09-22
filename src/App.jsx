import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Shop from './pages/Shop/Shop';

function App() {

  return (
  
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Shop />} />
      <Route path='/products/:id' element={<SingleProduct />} />
    </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
