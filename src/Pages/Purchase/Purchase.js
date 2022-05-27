import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Purchase = () => {

    const [user] = useAuthState(auth);
    const { id } = useParams()
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        async function getProduct() {
            const singleProduct = await fetch(`http://localhost:5000/products/${id}`)
            const product = await singleProduct.json()
            setProduct(product)
        }
        getProduct();
    }, []);

           const handleUpdateCount = () => {
        const updatedQuantity = { number: quantity };
        //send data to server
        fetch(`http://localhost:5000/products/${id}`, {

            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                // toast('Quantity added successfully', { position: toast.POSITION.TOP_CENTER });
                setProduct(data);
                setQuantity('');
                // setChanges('something changed')
            })

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
                                <input type="text" placeholder="Address" class="input input-bordered input-primary w-full max-w-xs mb-5 mx-auto" />
                                <input type="number" placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs mb-5 mx-auto" /> <br />
                                <button class="btn btn-success text-center">Submit</button>
                            </div>
                            
                        </div>
                <div>
                        <input onChange={(e) => setQuantity(e.target.value)} value={quantity} type="number" placeholder="Quantity" class="input input-bordered input-primary w-full max-w-xs mb-5 ml-12" /><br />
                    <button onClick={handleUpdateCount} class="btn btn-success text-center mb-2">Add Quantity</button>
                    <button class="btn btn-warning text-center ml-2 mb-2">Delete Quantity</button>
                        <label for="my-modal-3" class="btn btn-primary ml-2">Place Order</label>
                </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Purchase;