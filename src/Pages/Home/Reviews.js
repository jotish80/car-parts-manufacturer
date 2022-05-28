import React, { useEffect, useState } from 'react';

import player1 from '../../assets/images/player-1.png'
import player3 from '../../assets/images/player-3.png'
import player5 from '../../assets/images/player-5.png'


const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://boiling-tundra-47817.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    //   const handleDelete = (id) => {
    //     const proceed = window.confirm('Are you sure?');
    //     if (proceed) {
    //         const url = (`https://boiling-tundra-47817.herokuapp.com/orders/${id}/${user.email}`);
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(result => {
    //                 console.log(result);
    //                 const remaining = orders.filter(order=> order._id !== id)
    //                setOrders(remaining);
    //             })
    //     }
    // }

    return (
        <>
            <h1 className='text-center text-primary text-5xl'>REVIEWS</h1>
           
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-7 px-10 py-10 mt-5 mb-12">
                 
                 {
                reviews.map(review => <div className='stat shadow-lg text-center'>
                    <figure class="px-10 pt-10">
                        
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{review.name}</h2>
                        <h4 className='text-gray-400'>Market Officer</h4>
                        <div class="rating">
                            {[...Array(review.rating).keys()].map(start => "⭐")}
                        </div>
                        <p className='text-xl'>{review.description}</p>

                    </div>
                </div>)
                }
            </div>
               
           
      
        </>
    );
};

export default Reviews;