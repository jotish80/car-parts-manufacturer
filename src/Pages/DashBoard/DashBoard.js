import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl text-purple-500 font-bold text-center mb-4 mt-4'>Welcome To Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                    <li><Link className="text-xl font-bold" to='/dashboard'>My Orders</Link></li>
                    <li><Link className="text-xl font-bold" to='/dashboard/profile'>My Profile</Link></li>
                    <li><Link className="text-xl font-bold" to='/dashboard/review'>Add Review</Link></li>
                    <li><Link className="text-xl font-bold" to='/dashboard/manageorders'>Manage Orders</Link></li>
                    <li><Link className="text-xl font-bold" to='/dashboard/addproduct'>Add Product</Link></li>
                    <li><Link className="text-xl font-bold" to='/dashboard/admin'>Make Admin</Link></li>
                    <li><Link className="text-xl font-bold" to='/dashboard/manageproducts'>Manage Products</Link></li>
                    <li><Link className="text-xl font-bold" to='/dashboard/payment'>Payment</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;