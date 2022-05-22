import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const productId = useParams()
    console.log(productId);
    const [products, setProducts] = useState({});
    console.log(products)
    useEffect(()=>{
        fetch('product.json'+ productId)
        .then(res => res.json())
        .then( data =>setProducts(data))
    },[])

    return (
        <div className='flex justify-around items-center gap-7 px-10 ml-5 py-10 mt-5 mb-12'>
             <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={products.img} alt="Shoes" /></figure>
            <div class="card-body"> 
                <h2 class="card-title">{products.name} {products.length}</h2>
                <p>{products.description}</p>
                <h2 className='text-center'>Price$ {products.price}</h2>
                <h2 className='text-center'>Order Quantity: {products.orderQuantity}</h2>
                <h2 className='text-center'>available Quantity: {products.availableQuantity}</h2>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Delivered</button>
                </div>
            </div>
        </div>
          <div className="justify-center">
                <input type="number" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs mb-5" /> 
                <button class="btn btn-primary text-center">Add Quantity</button>
            </div>
        </div>
    );
};

export default Purchase;