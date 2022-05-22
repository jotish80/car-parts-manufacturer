import React, { useEffect, useState } from 'react';

const UseProducts = () => {
   const [products, setProducts] = useState([]);

   useEffect(()=>{
       fetch('product.json')
       .then(res=> res.json())
       .then(data => setProducts(data))
   },[]);

   return [products, setProducts]
};

export default UseProducts;