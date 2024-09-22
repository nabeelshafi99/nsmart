import { useEffect, useState } from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import "./home.scss"


const Home =() =>{

        const [laptopSale,setLaptopSale] =useState([])
        const [beautySale ,setBeautySale] = useState([])
        const [furnitureSale,setFurnitureSale] = useState([])
        const [kitchenAccessories,setkitchenAccessories] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/category/Laptops')
        .then(res => res.json())
        .then((data) => {
                setLaptopSale(data.products)    
        });

    },[])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/category/beauty')
        .then(res => res.json())
        .then((data) => {
                setBeautySale(data.products)    
        });

    },[])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/category/furniture')
        .then(res => res.json())
        .then((data) => {
                setFurnitureSale(data.products)    
        });

    },[])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/category/kitchen-accessories')
        .then(res => res.json())
        .then((data) => {
            setkitchenAccessories(data.products)    
        });

    },[])

    return(
        <>
        <Banner />
        <div className="main-content">
            <div className="layout">
        <Products secTitle="Laptop Sale" getProducts={laptopSale} />
            </div>
        </div>

        <div className="main-content">
            <div className="layout">
        <Products secTitle="Beauty Sale" getProducts={beautySale} />
            </div>
        </div>

        <div className="main-content">
            <div className="layout">
        <Products secTitle="Furniture Sale" getProducts={furnitureSale} />
            </div>
        </div>

        <div className="main-content">
            <div className="layout">
        <Products secTitle="Kitchen Sale" getProducts={kitchenAccessories} />
            </div>
        </div>
        </>
    )
}

export default Home; 