"use client"
import React from 'react';
import Navlink from './shared/Navlink';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
const Navbar =  () => {
  const userData =  authClient.useSession();
  const UserDa = userData.data?.user;
    
  const handleSignOut = async () => {
    await authClient.signOut();
  }

      return (
  <div>

      <div className=" container mx-auto navbar py-4 bg-base-100 shadow-sm">
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
  <div className="navbar-end flex space-x-5">

  {
    !UserDa ? 
               

    <ul className='flex space-x-4 justify-end items-center '>
      <li><Navlink className={'text-sm font-normal border border-accent p-2 '} href={'/Register'}>Register Now</Navlink></li>
              <li><Navlink className={'btn bg-blackJ '} href={'/Login'} >Login</Navlink></li>
    </ul>
  
    :  
    
        <div className='flex justify-end items-center space-x-4'>
             
                   <Avatar>
        <Avatar.Image alt={UserDa?.name} src={UserDa?.image} referrerPolicy='no-referrer' />
        <Avatar.Fallback> {UserDa?.name[0]} </Avatar.Fallback>
      </Avatar>
          
          <button onClick={handleSignOut} className='btn bg-red-600 hover:bg-red-800 '>LogOut</button>

       </div>



  }

  </div>

      </div>

    </div>
  );
};

export default Navbar;