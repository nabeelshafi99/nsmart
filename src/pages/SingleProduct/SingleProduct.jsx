import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import {CartItemsContext} from '../../Context/CartContext';




const SingleProduct = () => {
    const [products,setProducts] = useState([])
    const {id} = useParams();
    const {addCartItems} = useContext(CartItemsContext)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then((data) => setProducts(data));
    },[])
    return(
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-74 object-cover object-center rounded"
        src={products.thumbnail}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 justify-center flex flex-col gap-3">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          {products.category}
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {products.title}
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-red-600"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-red-600"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-red-600"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-red-600"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-red-600"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
        </div>
        <p className="leading-relaxed">
          {products.description}
        </p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">  
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">
            $ {products.price}
          </span>
          <button onClick={() => addCartItems({
          id: products.id,
          title : products.title,
          price :products.price,
          thumbnail : products.thumbnail

        })} className="flex ml-auto text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    )

}

export default SingleProduct;