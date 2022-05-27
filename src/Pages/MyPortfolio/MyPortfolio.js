import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center items-center mt-24'>
            <div class="card w-2/4 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-xl font-bold">Name: Jotish chandra sarker</h2>
                <h2 class="card-title">Email: sarkerjotishchandra@gmail.com</h2>
                <h2 class="card-title">Education: HSC</h2>
                <h2 class="card-title">SKILLS</h2>
                <li>HTML</li>
                <li>CSS</li>
                <li>BOOTSTRAP</li>
                <li>TAIL WIND CSS</li>
                <li>JAVA SCRIPT + ES6</li>
                <li>REACT</li>
                <li>GIT</li>
                <li>NODE + NPM</li>
                <h2 class="card-title">Projects links</h2> 
                <a className='text-blue-400 underline text-xl' href="https://organic-fruits-warehouse.web.app/">Organic Fruits Warehouse</a>
                <a className='text-blue-400 underline text-xl' href="https://personal-gym-trainer.netlify.app/">Personal Gym Trainer</a>
                 
                 
            </div>
        </div>
        </div>
    );
};

export default MyPortfolio;