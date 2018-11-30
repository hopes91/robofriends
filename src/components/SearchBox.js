import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className='ma1 pa2'>
      <input 
        className='pa3 ba b--light-blue bg-lightest-blue' 
        type='search' 
        placeholder='search robots' 
        onChange={onSearchChange} 
      />
    </div>
  );
}

export default SearchBox;
