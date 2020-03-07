import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
  return (
    <form>
      <i className="fab fa-searchengin"></i>
      <input 
        className='search-bar'
        type='search'
        placeholder='search name'
        onChange={props.onSearchChange}
        />
    </form>
  );
} 

export default SearchBar;