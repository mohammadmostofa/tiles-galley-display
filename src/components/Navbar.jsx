"use client"
import React from 'react';
import Navlink from './shared/Navlink';

const Navbar = () => {
  return (
    <div>
      
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        <li><Navlink href={'/'} >Home</Navlink></li>
        <li><Navlink href={'/AllTiles'}>All Tiles</Navlink></li>
        <li><Navlink href={'/Profile'} >Profile</Navlink></li>

      </ul>
    </div>
    <h2 className="text-xl font-bold shadow-sm bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text" >Tiles Gallery</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4">
     
        <li><Navlink href={'/'} >Home</Navlink></li>
        <li><Navlink href={'/AllTiles'}>All Tiles</Navlink></li>
        <li><Navlink href={'/Profile'} >Profile</Navlink></li>

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-green-800 ">Login</a>
  </div>
</div>

    </div>
  );
};

export default Navbar;