import React, { useEffect, useState } from 'react';

import player1 from '../../assets/images/player-1.png'
import player3 from '../../assets/images/player-3.png'
import player5 from '../../assets/images/player-5.png'


const Reviews = () => {

    // const [reviews, setReviews] = useState([])

    //  useEffect(() =>{
    //      fetch(`http://localhost:5000/review`)
    //      .then(res => res.json())
    //      .then(data => reviews.map(review =>   ))
    //  },[]);

    //   const handleDelete = (id) => {
    //     const proceed = window.confirm('Are you sure?');
    //     if (proceed) {
    //         const url = (`https://sheltered-fortress-61368.herokuapp.com/orders/${id}/${user.email}`);
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
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-7 px-10 py-10 mt-5 mb-12'>
                <div class="card w-96 bg-gray-50 shadow-xl">
                    <figure class="px-10 pt-10">
                        <div class="avatar">
                            <div class="w-24 mask mask-hexagon">
                                <img src={player1} alt=''/>
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Mark</h2>
                        <h4 className='text-gray-400'>Market Officer</h4>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className='text-xl'>I ordered a car part for my older vehicle and while the part didn't exactly have a perfect fit, I was able to make it work. The company reached out to me.</p>

                    </div>
                </div>
                <div class="card w-96 bg-gray-50 shadow-xl">
                    <figure class="px-10 pt-10">
                        <div class="avatar">
                            <div class="w-24 mask mask-hexagon">
                                <img src={player3} alt='' />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">John</h2>
                        <h4 className='text-gray-400'>Production Officer</h4>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className='text-xl'>Feel happy to use those parts. I was very appreciative of the customer care and how quickly they were responding. That experience alone was enough for me. </p>

                    </div>
                </div>
                <div class="card w-96 bg-gray-50 shadow-xl">
                    <figure class="px-10 pt-10">
                        <div class="avatar">
                            <div class="w-24 mask mask-hexagon">
                                <img src={player5} alt=''/>
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Robert</h2>
                        <h4 className='text-gray-400'>Growth Officer</h4>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className='text-xl'>Quality product indeed. Pleasure to have! I absolutely recommend this company and to want to return as a customer if ever needed again. Nice customer friendly.</p>

                    </div>
                </div>
                <div class="card w-96 bg-gray-50 shadow-xl">
                    <figure class="px-10 pt-10">
                        <div class="avatar">
                            <div class="w-24 mask mask-hexagon">
                                <img src="https://api.lorem.space/image/face?hash=55350"  alt=''/>
                            </div>
                        </div>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Michel</h2>
                        <h4 className='text-gray-400'>Strategy Officer</h4>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className='text-xl'>Durability excelente. Flexible to use! kept receiving different emails with tracking changes. The items were "in stock" and they responding me quickly.   </p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;