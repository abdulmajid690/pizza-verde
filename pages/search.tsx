import React from 'react';
import Search from '@/Containers/Search/search';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Items } from '@/redux/menuItemsSlice';


const SearchPage = () => {
  const { pathname, query } = useRouter();
  const menuItem = useSelector(Items);
  const searchItem = query.searchItem; 

  console.log('menuItem',menuItem);
  console.log('Search Item:', searchItem);

  return (
    <>
     <Search menuItem={menuItem} searchItem={searchItem} />
    </>
);
};

export default SearchPage;
