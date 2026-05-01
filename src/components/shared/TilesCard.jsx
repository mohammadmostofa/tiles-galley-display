import Image from 'next/image';
import React from 'react';

const TilesCard = ({tiles}) => {
  return (
         
    <div>
       <div className="card bg-slate-500 shadow-md">
  <figure className='p-4'>
    
       <Image src={tiles.image} width={200} height={200} alt={tiles.title} className='w-70 h-55 mx-auto rounded-xl' />

  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-2xl"> {tiles.title} </h2>
    <p> {tiles.description} </p>
    <div className="card-actions">
      <button className="btn btn-primary"> View Details</button>
    </div>
  </div>
</div>
</div>
    
  );
};

export default TilesCard;