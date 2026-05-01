import { getTopTilesData } from '@/app/lib/data';
import React from 'react';
import TilesCard from './shared/TilesCard';


const TopTiles =async() => {
const TilesDa = await getTopTilesData()

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center container mx-auto py-10 gap-4'>
         
         {TilesDa.map(tiles => <TilesCard key={tiles.id} tiles={tiles} ></TilesCard> )}

    </div>
  );
};

export default TopTiles;