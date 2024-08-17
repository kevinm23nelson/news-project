import React from 'react';
import './App.css';
import NewsList from './Components/NewsList/NewsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Top Business News</h1>
      </header>
      <NewsList />
    </div>
  );
}

export default App;
