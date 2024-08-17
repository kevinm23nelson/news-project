import React, { useState } from 'react';
import './App.css';
import NewsList from './Components/NewsList/NewsList';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <NewsList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
