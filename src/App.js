import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NewsList from './Components/NewsList/NewsList';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import DetailedNews from './Components/DetailedNews/DetailedNews';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <SearchBar handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<NewsList searchQuery={searchQuery} />} />
          <Route path="/article/:id" element={<DetailedNews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
