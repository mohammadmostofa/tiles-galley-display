import React from 'react';
import bannerImg from '@/banner_img.png'
import Image from 'next/image';
import TopTiles from '@/components/TopTiles';
import Marq from '@/components/shared/Marq';
import Link from 'next/link';
  
 

   const Home = () => {
    return (
      <div className='flex flex-col justify-center items-center container mx-auto'>

           <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">

  <Image
    src={bannerImg}
    alt="banner"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">

    <h1 className="text-white font-extrabold 
                   text-2xl sm:text-3xl md:text-5xl lg:text-6xl 
                   leading-tight max-w-3xl">
      Discover Your Perfect Aesthetic
    </h1>

    <p className="text-gray-200 mt-4 text-sm md:text-lg max-w-xl">
      Explore premium tiles and elevate your space with modern design.
    </p>

    <Link href="/AllTiles">
      <button className="mt-6 px-3 py-2 rounded-xl text-white font-semibold
                         bg-gradient-to-r from-green-400 to-emerald-500
                         hover:scale-105 hover:shadow-lg transition duration-300">
        Browse Now
      </button>
    </Link>

  </div>
</div>



           <div>

                <Marq></Marq>
           </div>
           
       
            
           <div><TopTiles></TopTiles></div>




      </div>
    );
   };
   
   export default Home;