import React from 'react';
import searchIcon from '@/public/search.svg';

const Search: React.FC = () => {
  return (
    <>
      <input
        type="text"
        className={`search-input w-full border-[#e5e5e5] rounded-full border bg-[#000]/5 bg-left bg-no-repeat p-2 pl-10 text-sm font-normal text-[#737373]`}
        placeholder="Search ai agents..."
        style={{
          backgroundImage: `url(${searchIcon.src})`,
          backgroundPosition: '1rem',
        }}
      />
    </>
  );
};
export default Search;
