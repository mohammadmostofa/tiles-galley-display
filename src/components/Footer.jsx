import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
  return (
  

<div className='flex flex-col justify-center items-center' >

  
<footer className=" text-base-content py-10 ">

  <div className=" mx-auto w-full px-4">
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

      <div>
        <h2 className="text-lg font-bold mb-3">About Us</h2>
        <p className="text-sm font-medium">
          We create modern web experiences with 
          clean UI and fast performance.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-3">Quick Links</h2>
        <nav className="flex flex-col gap-2 text-sm">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Projects</a>
        </nav>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-3">Contact Us</h2>
        <div className="text-sm space-y-2">
          <p>Bangladesh</p>
          <p>+8801784562127</p>
          <p>mohamadmostofa.dev@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col justify-center md:justify-end items-center text-2xl gap-4">
        <FaFacebook/>
        <FaGoogle />
        <FaGithub/>
        <IoLogoLinkedin />
      </div>

    </div>

  </div>

</footer>

<p className="text-center w-full mt-6">
      Copyright © {new Date().getFullYear()} - All rights reserved by mohammad mostofa
    </p>
</div>




  );
};

export default Footer;