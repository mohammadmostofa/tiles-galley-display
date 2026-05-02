"use client"
import React, { useState } from 'react';
import AllCards from '@/components/shared/AllCards';

const SearchBar = ({ tiles }) => {

  const [search, setSearch] = useState('');

  const filteredItems = tiles.filter(tiles =>
    tiles.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <input 
  
        type="text"
        placeholder="Search..."
        className="input input-bordered mb-4 ml-5 "
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 py-10 '>
        {
          
          filteredItems.length > 0 ?  filteredItems.map(tiles => (
            <AllCards key={tiles.id} tiles={tiles} />
          ))
          
          : ( <p> No Data Found </p> )


        }
      </div>

    </div>
  );
};

export default SearchBar;