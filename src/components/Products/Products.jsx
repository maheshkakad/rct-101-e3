import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";


const Products = () => {

  
  return <div>

     {products.map((p) => (
      <div key={p.id}>
      <Link to={`./Product/Product${p.id}`}> <h2>{p.name}</h2>
       <h1>{p.description}</h1></Link>
       </div>
     ))}
  </div>;
};

export default Products;
