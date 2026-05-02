"use client"
import Image from 'next/image';
import Link from 'next/link';

const AllCards = ({tiles}) => {
  return (
   
   

      <div className="bg-gray-700 backdrop-blur-lg border border-gray-200 rounded-2xl
       shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-4  group">

  {/* Image */}
  <div className="overflow-hidden">
    <Image
      src={tiles.image}
      width={300}
      height={200}
      alt={tiles.title}
      className="w-full h-[180px] object-cover rounded-2xl group-hover:scale-110 transition duration-500"
    />
  </div>

  {/* Content */}
  <div className="p-4 text-center space-y-2">

    <h2 className="text-lg font-semibold text-white group-hover:text-indigo-600 transition">
      {tiles.title}
    </h2>

    <p className="text-sm text-gray-300 line-clamp-2">
      {tiles.description}
    </p>

    {/* Button */}
    <Link href={`/Details/${tiles.id}`}>
      <button className="mt-3 px-4 py-2 text-sm rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 hover:scale-105 transition-all duration-300">
        View Details
      </button>
    </Link>

  </div>
</div>

  


  );
};

export default AllCards;