import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {

    const [user] = useAuthState(auth);
    const { id } = useParams()
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
   const [phone, setPhone] = useState('')
   const [address, setAddress] = useState('')
   


    useEffect(() => {
        async function getProduct() {
            const singleProduct = await fetch(`https://boiling-tundra-47817.herokuapp.com/products/${id}`)
            const product = await singleProduct.json()
            setProduct(product)
        }
        getProduct();
    }, []);

           const handleOrder = () => {
               const order = {
                   productId : id,
                   email: user.email,
                   quantity,
                   address,
                   phone,
               }
        //send data to server
        fetch(`https://boiling-tundra-47817.herokuapp.com/order`, {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log("----> ", data)
                toast('Submitted Successfully')
            })
    }


 let errorMassage;
    if (quantity < 0  || quantity > 120 ) {
        errorMassage = <div><p className='text-red-500'>{ "quantity not should be less or more than quantity and available quantity"}</p></div>
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 px-10 py-10 gap-7 mt-5 mb-12 ml-24'>
            <div class="card w-3/4 bg-base-100 shadow-xl">
                <figure><img src={product.img} alt="Shoes" /></figure>
               <h2 class="text-2xl font-bold text-emerald-400 text-center mt-5 mb-5">{product.name}</h2>
            </div>
            <div class="card w-3/4 bg-base-100 shadow-xl">
                <h2 className='text-center text-2xl mb-3 font-bold'>Product Details</h2>
                 <div class="card-body">
                    <h2 class="text-2xl font-bold text-emerald-400">{product.name}</h2>
                    <p className='text-xl font-semibold'>{product.description}</p>
                    <h2 className='text-center text-xl font-semibold'>Price: ${product.price}</h2>
                    <h2 className='text-center text-xl font-semibold font-semibold'>Order Quantity: {product.orderQuantity}</h2>
                    <h2 className='text-center text-xl font-semibold'>available Quantity: {product.availableQuantity}</h2>
                    <h2 className='text-center text-xl font-semibold'>User Name: {user.displayName}</h2>
                    <h2 className='text-center text-xl font-semibold'>Email: {user.email}</h2>
                    <div class="card-actions justify-center">
                        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative">
                                <h2 class="text-xl font-bold text-emerald-400 mb-2 ">Please give us your more information!</h2>
                                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} class="input input-bordered input-primary w-full max-w-xs mb-5 mx-auto" />
                                <input type="number" placeholder="Phone Number" onChange={(e)=> setPhone(e.target.value)} class="input input-bordered input-primary w-full max-w-xs mb-5 mx-auto" /> <br />
                                <button onClick={handleOrder} class="btn btn-success text-center">Submit</button>
                            </div>
                            
                        </div>
                <div>
                        <input onChange={(e) => setQuantity(e.target.value)} value={quantity} type="number" placeholder="Quantity" class="input input-bordered input-primary w-full max-w-xs mb-5 ml-12" /><br />
                        {errorMassage}
                    <button onClick={() => setQuantity(Number(quantity)+1)} class="btn btn-success text-center mb-2">Increment Quantity</button>
                            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1: quantity)}  class="btn btn-warning text-center ml-2 mb-2">Decrement Quantity</button>
                        <label for="my-modal-3" class="btn btn-primary ml-2">Place Order</label>
                        <ToastContainer />
                </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Purchase;