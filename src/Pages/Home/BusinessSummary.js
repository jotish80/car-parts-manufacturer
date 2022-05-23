import React from 'react';
import { BsPeople } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';
import { GiStarsStack } from 'react-icons/gi';


const BusinessSummary = () => {
    return (
        <>
        <h1 className='text-center text-primary text-5xl mt-10 mb-10'>Business Summary</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-7 px-10 py-10 mt-5 mb-12">
            
            <div class="stat shadow-lg text-center">
                <div>
                    <BsPeople className='h-20 w-20 mx-auto'  />
                </div>
                <div class="stat-value text-primary">100+ Customer</div>
                <div class="text-3xl text-accent p-2">We Served</div>
                 
            </div>

            <div class="stat  shadow-lg text-center">
                 <div>
                     <BiLike  className='h-20 w-20 mx-auto' />
                 </div>
                <div class="stat-value text-secondary">33K+ Reviews</div>
                <div class="text-3xl text-accent">Reviews</div>
                
            </div>

            <div class="stat  shadow-lg text-center">
                 <div>
                     <GiStarsStack className='h-20 w-20 mx-auto' />
                 </div>
                <div class="stat-value text-primary">120M+ Annual</div>
                <div class="text-3xl text-accent">Annual Revenue</div>
                 
            </div>

        </div>
        </>
    );
};

export default BusinessSummary;