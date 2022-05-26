import React from 'react';

const Blogs = () => {
    return (
        <div className='px-12 mt-10'>
            <div class="card w-full bg-base-100 shadow-xl mb-10">
                <div class="card-body">
                    <h2 class="card-title text-2xl"> How will you improve the performance of a React Application?</h2>
                    <li className='text-xl font-semibold'>Keeping component in state local when it needs.</li>
                    <li className='text-xl font-semibold'>Try to control unnecessary re render the components.</li>
                    <li className='text-xl font-semibold'>Using dynamic import.</li>
                    <li className='text-xl font-semibold'>Avoid lazy loading images in React Application</li>
                    <li className='text-xl font-semibold'>Avoid Reconciliation</li>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl mb-10">
                <div class="card-body">
                    <h2 class="card-title text-2xl"> What are the different ways to manage a state in a React application?</h2>
                    <li className='text-xl font-semibold'>Communication state.</li>
                    <li className='text-xl font-semibold'>Control State.</li>
                    <li className='text-xl font-semibold'>Location State.</li>
                    <li className='text-xl font-semibold'>Data State.</li>
                    <li className='text-xl font-semibold'>Session State.</li>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl mb-10">
                <div class="card-body">
                    <h2 class="card-title text-2xl"> How does prototypical inheritance work?</h2>
                    <p className='text-xl font-semibold'>Prototypal Inheritance is that an object can point to another object and inherit all its properties. In short ability to access object properties form another object. It allow multiple instances of an object to share in common properties.</p>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl mb-10">
                <div class="card-body">
                    <h2 class="card-title text-2xl"> What is a unit test? Why should write unit tests?</h2>
                    <p className='text-xl font-semibold'> Unit testing is a software development process. Where developers do smallest testable parts of application, called units are individually and freely scrutinized for proper operations. Developer do their taste in development process by the software.</p>
                    <p className='text-xl font-semibold'>Unit taste confirm that all code meets quality standards before it deployed. Unite taste saves time and money and help developers to write better code and more efficiently.</p>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl mb-10">
                <div class="card-body">
                    <h2 class="card-title text-2xl">Why you do not set the state directly in React?</h2>
                    <p className='text-xl font-semibold'> Because it mutating the state directly can occur odd bugs in code. Components are difficult to optimize and might not re render.</p>
                </div>
            </div>
        </div>
        
    );
};

export default Blogs;