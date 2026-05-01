import Image from 'next/image';
import React from 'react';

const page =async ({params}) => {
  // dianamic path
  const {id} = await params ;

// detauls data api again fatch 
  const res = await fetch('https://my-tiles-data.onrender.com/data.json')
  const data = await res.json() 
  const tiles = data.tilesData;

  // findi mathod
  const tilesDataFind = tiles.find(p => p.id == id )
  console.log(tilesDataFind)


  return (

    <div>

<div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-12 px-4">
  
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center 
                  backdrop-blur-lg bg-white/60 border border-white/40 
                  shadow-2xl rounded-3xl p-8">

    {/* Image Section */}
    <div className="flex justify-center relative group">
      
      {/* Glow Effect */}
      <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition"></div>

      <Image
        src={tilesDataFind.image}
        width={420}
        height={500}
        alt={tilesDataFind.title}
        className="relative rounded-2xl object-cover shadow-xl 
                   group-hover:scale-105 transition duration-500"
      />
    </div>

    {/* Content Section */}
    <div className="space-y-5">

      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 
                     bg-clip-text text-transparent">
        {tilesDataFind.title}
      </h2>

      <p className="text-gray-600 leading-relaxed">
        {tilesDataFind.description}
      </p>

      {/* Badges */}
      <div className="flex flex-wrap gap-3">
        <span className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium">
          {tilesDataFind.category}
        </span>

        <span className={`px-4 py-1 rounded-full text-sm font-medium 
          ${tilesDataFind.instock 
            ? "bg-green-100 text-green-600" 
            : "bg-red-100 text-red-600"}`}>
          {tilesDataFind.instock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Price */}
      <div className="text-3xl font-bold text-gray-900">
        {tilesDataFind.price} {tilesDataFind.currency}
      </div>

      {/* Info */}
      <div className="text-sm text-gray-500 space-y-1">
        <p>📐 Size: {tilesDataFind.dimensions}</p>
        <p>🧱 Material: {tilesDataFind.material}</p>
      </div>

      {/* Button */}
      <button className="mt-4 px-8 py-3 rounded-xl text-white font-semibold 
                         bg-gradient-to-r from-indigo-600 to-purple-600
                         hover:scale-105 hover:shadow-lg transition duration-300">
        Buy Now
      </button>

    </div>

  </div>
</div>

    </div>
  );
};

export default page;