import React from 'react';
import banner from '../../assets/images/banner.jpg'
 

const Banner = () => {
    const myStyle = {
        backgroundImage:
            `url(${banner})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',   
    };
    return (
        <div class="hero min-h-screen"  style={myStyle}>
            <div class="hero-overlay bg-opacity-10"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h2 class="mb-5 text-5xl font-bold text-white">Quality Parts Manufacturer</h2>
                    <p class="mb-5 text-2xl text-white">We provides quality parts for cars. Customer satisfaction is our main concern. We ensure durability and best services.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;