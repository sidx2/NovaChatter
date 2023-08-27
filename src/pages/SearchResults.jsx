import React from 'react'
import { useParams } from 'react-router-dom';

const SearchResults = () => {
    const { searchText } = useParams();
  return (
    <div>
        <p>Search results for {searchText}</p>
    </div>
  )
}

export default SearchResults