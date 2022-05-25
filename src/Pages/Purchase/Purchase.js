import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Purchase = () => {

    const [user] = useAuthState(auth);
    console.log(user)
    const{ id} = useParams()
    const [product, setProduct] = useState({});
    
    useEffect(()=>{
        async function getProduct(){
        const singleProduct = await fetch(`http://localhost:5000/products/${id}`)
         const product = await singleProduct.json()
         setProduct(product)
        }
        getProduct();
    },[]);

    return (
        <div className='flex justify-around items-center gap-7 px-10 ml-5 py-10 mt-5 mb-12'>
             <div class="card w-[500px] bg-base-100 shadow-xl">
            <figure><img src={product.img} alt="Shoes" /></figure>
            <div class="card-body"> 
                <h2 class="text-2xl font-bold text-emerald-400">{product.name}</h2>
                <p className='text-xl font-semibold'>{product.description}</p>
                <h2 className='text-center text-xl font-semibold'>Price: ${product.price}</h2>
                <h2 className='text-center text-xl font-semibold font-semibold'>Order Quantity: {product.orderQuantity}</h2>
                <h2 className='text-center text-xl font-semibold'>available Quantity: {product.availableQuantity}</h2>
                <h2 className='text-center text-xl font-semibold'>User Name: {user.displayName}</h2>
                <h2 className='text-center text-xl font-semibold'>Email: {user.email}</h2>
                  <input type="text" placeholder="Address" class="input input-bordered input-primary w-full max-w-xs mb-5 mx-auto" /> 
                  <input type="number" placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs mb-5 mx-auto" /> 
                <div class="card-actions justify-center">
                    <button class="btn btn-success bg-success">Place Order</button>
                </div>
            </div>
        </div>
          <div className="justify-center">
                <h2 className='text-center text-2xl mb-3 font-bold'>Update Quantity</h2>
                <input type="number" placeholder="Quantity" class="input input-bordered input-primary w-full max-w-xs mb-5" /> 
                <div className="flex">
                    <button class="btn btn-success text-center">Add Quantity</button>
                <button class="btn btn-warning text-center ml-2">Delete Quantity</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;