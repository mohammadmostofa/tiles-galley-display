import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllCards = ({tiles}) => {

  return (

    <div>



                <div className="p-4">
  <div className="bg-white/80 backdrop-blur-md border border-gray-200 
                  rounded-2xl shadow-lg hover:shadow-2xl 
                  transition duration-300 overflow-hidden group">

    <figure className="p-5 flex justify-center relative">
      
      <div className="absolute w-40 h-40 bg-indigo-200 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition"></div>

      <Image
        src={tiles.image}
        width={220}
        height={220}
        alt={tiles.title}
        className="relative rounded-xl object-cover 
                   group-hover:scale-105 transition duration-500"
      />
    </figure>

    <div className="px-5 pb-6 text-center space-y-3">

      <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
        {tiles.title}
      </h2>

      <p className="text-sm text-gray-600 line-clamp-2">
        {tiles.description}
      </p>

      <Link href={`/Details/${tiles.id}`}>
        <button className="mt-2 px-5 py-2 rounded-lg text-white text-sm font-medium
                           bg-gradient-to-r from-indigo-500 to-purple-500
                           hover:scale-105 hover:shadow-md transition duration-300">
          View Details
        </button>
      </Link>

    </div>
  </div>
</div>
    </div>

  );
};

export default AllCards;