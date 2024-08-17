import React from 'react';
import './SearchBar.css';

function SearchBar({ handleSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for articles..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
