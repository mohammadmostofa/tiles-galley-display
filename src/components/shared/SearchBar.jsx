"use client"
import React, { useState } from 'react';
import AllCards from '@/components/shared/AllCards';

const SearchBar = ({ tiles }) => {

  const [search, setSearch] = useState('');

  const filteredItems = tiles.filter(tile =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {
          
          filteredItems.length > 0 ?  filteredItems.map(tile => (
            <AllCards key={tile.id} tiles={tile} />
          ))
          
          : ( <p> No Data Found </p> )


        }
      </div>

    </div>
  );
};

export default SearchBar;