import { getAllTilesData } from '@/app/lib/data';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Marq =  async () => {
  const tiles = await getAllTilesData();
  
  return (
    <div className='container mx-auto  mt-10'>
           <Marquee className=' py-6  border shadow-amber-50 '>

            {
            tiles.map(
              tiles => 

                 <h1 className='text-center px-6 text-shadow-gray-50 font-bold space-x-1'
                 
               key={tiles.id}>New Arrivals:<span className='text-green-500' >{tiles.title}</span> | Weekly Feature:<span className='text-yellow-300'>{tiles.category}</span> | Join the Community...

                  </h1>

            )
           }

           </Marquee>
    </div>
  );
};

export default Marq;