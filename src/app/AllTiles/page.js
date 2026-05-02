import React from 'react';
import { getAllTilesData } from '../lib/data';
import AllCards from '@/components/shared/AllCards';
import SearchBar from '@/components/shared/SearchBar';


const AllTilesPage = async () => {
  const tiles = await getAllTilesData()

   
  return (

      <div>

        
        {
          <SearchBar tiles={tiles} ></SearchBar>
        }
                 


    <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center gap-4 py-15 px-4'>
       
       {
        tiles.map(tiles => <AllCards key={tiles.id} tiles={tiles} ></AllCards> )
       }
       
       
    </div>


</div>


  );
};
export default AllTilesPage;