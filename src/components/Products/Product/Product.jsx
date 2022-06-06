import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  // Note: this id should come from api

  const [count , setCount] = useState(0)
  const [product , setProducts] = useState([]);
  useEffect(() => {
       const fetchproducts = async () => {
         let r = await fetch("http://localhost:8080/products")
         let d = await r.json();
         setProducts(d);
       };
       fetchproducts(); 
  }, [])


 
  return (
    <div style={{ display:"grid" , gridtemplatecolumns:  "1fr 1fr 1fr"}}>
    {product.map((product) => (
      
      <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={() => setCount(count+1)}>+</button>
        <span data-cy="product-count">
          {
            // Count here from 
            count
          
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={() => setCount(count-1)}>-</button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
    
    ))}
   </div>
  );
};

export default Product;
