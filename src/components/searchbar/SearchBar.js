import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearchEngin } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.scss';

const SearchBar = (props) => {
  return (
    <form>
      {/* <FontAwesomeIcon icon={faSearchEngin} />  */}
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

 