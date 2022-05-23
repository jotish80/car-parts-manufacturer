import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProductCard = (props) => {
    const {_id, name, price, img, description, orderQuantity,availableQuantity} = props.product;
    const navigate = useNavigate();

  

    return (
        <>
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <h2 className='text-center'>Price$ {price}</h2>
                <h2 className='text-center text-primary-focus text-xl'>Order Quantity: {orderQuantity}</h2>
                <h2 className='text-center text-xl'>Available Quantity: {availableQuantity}</h2>
                <div class="card-actions justify-center">
                    <button onClick={()=> navigate(`/purchase/${_id}`)} class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductCard;