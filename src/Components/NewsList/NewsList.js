import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NewsList.css';
import placeholderImage from '../../Images/NewsImage.jpg';
import mockNews from '../../MockData/MockData';

function NewsList({ searchQuery }) {
  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      setNewsArticles(mockNews);
    } catch (error) {
      setError('Failed to load news data. Please try again later.');
    }
  }, []);

  const filteredArticles = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (article.description && article.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    if (searchQuery && filteredArticles.length === 0) {
      setError('Your search did not yield any results.');
    } else {
      setError('');
    }
  }, [searchQuery, filteredArticles]);

  if (error && filteredArticles.length === 0) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="news-list">
      {filteredArticles.map((article, index) => (
        <Link key={index} to={`/article/${index}`} className="news-card-link">
          <div className="news-card">
            <img
              src={article.urlToImage || placeholderImage}
              alt={article.title}
              className="news-image"
            />
            <div className="news-details">
              <h2 className="news-title">{article.title}</h2>
              <p className="news-description">{article.description}</p>
              <p className="news-date">{new Date(article.publishedAt).toLocaleDateString()}</p>
              <p className="news-source">{article.source.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NewsList;
