import { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./shop.scss";
import { Pagination } from "antd";



const Shop =() =>{
    const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      });
  }, [skip,limit]);

    return(
        <>
        <div className="main-content">
            <div className="layout">
        <Products secTitle="All Product" getProducts={products}  />
        <div className="mt-10 flex justify-center">
        <Pagination
          align="center"
          current={page}
          pageSize={limit}
          total={total}
          onChange={(num) =>{
            setPage(num)
            setSkip((num - 1) * limit)
            console.log(num)
          
          } }
          showSizeChanger={false}
         
        />
      </div>
            </div>

        </div>
        </>
    )
}

export default Shop; 