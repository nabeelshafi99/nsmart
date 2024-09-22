import { Profiler, useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

import "./products.scss";
import { Pagination } from "antd";

const Products = ({secTitle ,getProducts}) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      setProducts(getProducts)
  },);

  return (
    <div className="products-content">
      <div className="section-heading">{secTitle}</div>
      <div className="products flex justify-center ">
        {products.map((items, id) => (
          <ProductCard
            key={id}
            title={items.title}
            category={items.category}
            thumbnail={items.thumbnail}
            stock={items.stock}
            price={items.price}
            id={items.id}
          />
        ))}
      </div>
  
    </div>
  );
};

export default Products;
