"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const Navlink = ({href,children,className}) => {
  const pathName = usePathname();
  const isActive = href === pathName ;

  
  return (
    <>
     <Link href={href} className={` text-md font-bold ${isActive ? 
      'bg-gradient-to-r from-blue-500 to-purple-600': '' } ${className} `} > {children} </Link>
      
    </>
  );
};

export default Navlink;