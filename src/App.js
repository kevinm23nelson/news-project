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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar handleSearch={handleSearch} />
                <NewsList searchQuery={searchQuery} />
              </>
            }
          />
          <Route path="/article/:id" element={<DetailedNews />} />
          {/* You can add a NotFound route here if you want to handle non-existing routes */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
