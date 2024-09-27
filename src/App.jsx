import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import {useState,useEffect} from "react";
import './App.css'
import Home from './pages/Home/Home'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Shop from './pages/Shop/Shop';
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Auth from "./pages/Auth/Auth";
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Shop />} />
      <Route path='/products/:id' element={<SingleProduct />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
      <Footer />
    </BrowserRouter>

  )
}



export default App
