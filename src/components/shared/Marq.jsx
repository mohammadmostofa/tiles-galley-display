import { getAllTilesData } from '@/app/lib/data';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Marq =  async () => {
  const tiles = await getAllTilesData();
  
  return (
    <div>
           <Marquee className=' py-5  border shadow-amber-50 '>

            {
            tiles.map(
              tiles => 

                 <h1 className='text-center px-6 '
                 
               key={tiles.id}>
                New Arrivals:
                  {tiles.title}
              | Weekly Feature: Modern Geometric Patterns | Join the Community...

                  </h1>

            )
           }

           </Marquee>
    </div>
  );
};

export default Marq;