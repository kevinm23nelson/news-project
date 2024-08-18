import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NewsList from './Components/NewsList/NewsList';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import DetailedNews from './Components/DetailedNews/DetailedNews';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';

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
          <Route path="/404" element={<NotFoundPage />} /> {}
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 errors */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
