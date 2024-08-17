import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../../utils/apiCalls';
import NewsCard from '../NewsCard/NewsCard';

function NewsList() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const articles = await fetchNewsData();
        setNewsArticles(articles);
      } catch (error) {
        setError(error.message);
      }
    };
    getNews();
  }, []);

  if (error) {
    return <p>Error loading news: {error}</p>;
  }

  return (
    <div className="news-list">
      {newsArticles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsList;
