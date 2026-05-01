import React from 'react';
import bannerImg from '@/banner_img.png'
import Image from 'next/image';
import TopTiles from '@/components/TopTiles';
import Marq from '@/components/shared/Marq';
  
 

   const Home = () => {
    return (
      <div className='flex flex-col justify-center items-center container mx-auto'>

             <div className='relative flex flex-col justify-center items-center text-center py-5 w-full overflow-hidden '>
       
       <Image src={bannerImg} width={400} height={300} alt='banner_img'
       className='w-full'
       ></Image>

       <div className='absolute top-1/2 '>
              <h1 className='font-extrabold text-4xl '>Discover Your Perfect Aesthetic</h1>
              <button className='btn btn-primary bg-green-400 hover:bg-green-600 mt-10'> Browse Now </button>
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