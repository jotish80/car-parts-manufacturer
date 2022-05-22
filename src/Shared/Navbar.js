import React from 'react';
import { Link } from 'react-router-dom';
import car from '../assets/images/car.ico'
const Navbar = () => {

    const menuItems =
        <>
            <li><Link className='text-xl font-bold' to='/'>Home</Link></li>
            <li><Link className='text-xl font-bold' to='/purchase'>Purchase</Link></li>
            <li><Link className='text-xl font-bold' to='/reviews'>Reviews</Link></li>
            <li><Link className='text-xl font-bold' to='/login'>Login</Link></li>
            <li><Link className='text-xl font-bold' to='/signup'>Sign Up</Link></li>
        </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
             
                <div className='flex'>
                   <Link to="/">
                       <img   style={{height:'60px', width:'50px', marginLeft:'80px'}} src={car} alt="" />
                   </Link>
                    <Link to='/'> <a class="btn btn-ghost normal-case text-xl">Quality Parts</a></Link>
                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                     {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;