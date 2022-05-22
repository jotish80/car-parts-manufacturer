import React from 'react';

const OurNewServices = () => {
    return (
        <>
        <h2 className='text-center text-primary text-5xl mt-12 mb-12 uppercase'>Our New Services</h2>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-7 px-10 py-10 mt-5 mb-12">
            <div class="card w-96 glass ">
            <figure><img style={{height:'300px', width:'100%', objectFit:'cover'}} src="https://i.ibb.co/TvsTPy8/jimmy-nilsson-masth-j-L9zfz-TVSw-Y-unsplash.jpg?w=400&h=225" alt="car!"/></figure>
            <div class="card-body">
                <p className='text-orange-400'><small>Car tunning road assistance</small></p>
                <h2 class="card-title">Car Maintenance Services or Mascara?</h2>
            </div>
        </div>
            <div class="card w-96 glass">
            <figure><img style={{height:'300px', width:'100%', objectFit:'cover'}} src="https://i.ibb.co/Lgc5F8D/erik-mclean-3u-Hl-GFnz-PDU-unsplash.jpg?w=400&h=225" alt="car!"/></figure>
            <div class="card-body">
                <p className='text-orange-400'><small>Road assistance + security check</small></p>
                <h2 class="card-title">How to jump start your car Maintenance?</h2>
            </div>
        </div>
            <div class="card w-96 glass">
            <figure><img style={{height:'300px', width:'100%', objectFit:'cover'}} src="https://i.ibb.co/Hg3FFBz/sten-rademaker-UZUzv-JEv-Kn-I-unsplash.jpg" alt="car!"/></figure>
            <div class="card-body">
                <p className='text-orange-400'><small>Car tunning road assistance</small></p>
                <h2 class="card-title">Get Some Useful Car Maintenance Tips...</h2>
            </div>
        </div>
            <div class="card w-96 glass">
            <figure><img style={{height:'300px', width:'100%', objectFit:'cover'}} src="https://i.ibb.co/v1Zc7N6/kate-ibragimova-S5-AYGQN8-Ny8-unsplash.jpg?w=400&h=225" alt="car!"/></figure>
            <div class="card-body">
                <p className='text-orange-400'><small>Car tunning tyre care</small></p>
                <h2 class="card-title">Engine diagnostics by computer with new software! </h2>
            </div>
        </div>
        </div>
        </>
    );
};

export default OurNewServices;