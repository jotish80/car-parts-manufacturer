import React from 'react';
import top1 from '../../assets/images/parts1 (1).jpg'
import top2 from '../../assets/images/parts1 (2).jpg'
import top3 from '../../assets/images/parts1 (3).jpg'

const TopProducts = () => {
    return (
        <>
        <h1 className='text-primary text-5xl text-center mt-24 mb-14'>Top Products</h1>
        <div className='flex flex-col md:flex-row justify-around items-center m-3'>
            <div class="card w-96 bg-base-100 shadow-xl mb-4">
                <figure class="px-10 pt-10">
                    <img src={top1} />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Special Candle</h2>
                    <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                    <p>Ready to Deliver...</p>
                    <div class="card-actions">
                        <button class="btn btn-accent">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mb-4">
                <figure class="px-10 pt-10">
                    <img src={top2} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Powerful Break Wheel</h2>
                    <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                    <p>Ready to Deliver...</p>
                    <div class="card-actions">
                        <button class="btn btn-accent">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mb-4">
                <figure class="px-10 pt-10">
                    <img src={top3} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Strong Engine Rings</h2>
                    <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                    <p>Ready to Deliver...</p>
                    <div class="card-actions">
                        <button class="btn btn-accent">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default TopProducts;