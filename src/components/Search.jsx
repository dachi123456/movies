import React from 'react'
import './search.css'
const Search = ({handleInput,searchResult}) => {


  return (
    <div className='search-container'>
        <input type="text" onChange={handleInput} onKeyDown={searchResult} 
          placeholder='  Search for a movie ...'
        />
    </div>
  )
}

export default Search