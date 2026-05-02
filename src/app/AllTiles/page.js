
import SearchBar from '@/components/SearchBar';
import { getAllTilesData } from '../lib/data';

const AllTilesPage = async () => {
  const tiles = await getAllTilesData();

  return (
    <div>
       
       <div className='container mx-auto'>
        {
        <SearchBar tiles={tiles} ></SearchBar>
       }
       </div>
       
       
    </div>
  );
};
export default AllTilesPage;