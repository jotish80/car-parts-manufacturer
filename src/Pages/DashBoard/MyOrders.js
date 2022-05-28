import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const MyOrders = () => {

     const [user] = useAuthState(auth);
     const[orders, setOrders] = useState([]);

    useEffect(() => {
        
        if(user){
            fetch(`http://localhost:5000/order/${user.email}`)
        .then(res =>res.json())
        .then(data=> {
            console.log(data)
            setOrders(data)
        })
    }
         
    },[]);

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                             
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order=>  <tr>
                                {console.log(order.productId.name)}
                                {console.log(order)}
                            
                            <td>{order.productId.name}</td>
                            <td>$ {order.productId.price}</td>
                            <td>{order.quantity}</td>
                            <label for="my-modal-3" class="btn modal-button btn-outline">Cancel</label>
                        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                        <div class="modal">
                        <div class="modal-box relative">
                            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 class="text-lg font-bold">Are You Sure?</h3>
                        </div>
                        </div>
                            <button className='btn btn-outline ml-2'>Pay</button>
                        </tr>)
                        }
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;