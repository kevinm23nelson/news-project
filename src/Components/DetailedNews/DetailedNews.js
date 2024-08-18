import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailedNews.css';
import placeholderImage from '../../Images/NewsImage.jpg';
import { fetchNewsData } from '../../utils/apiCalls';

function DetailedNews() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getArticle = async () => {
      try {
        const articles = await fetchNewsData();
        const fetchedArticle = articles[parseInt(id)];
        if (fetchedArticle) {
          setArticle(fetchedArticle);
        } else {
          setError('Article not found.');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    getArticle();
  }, [id]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!article) {
    return <p className="loading-message">Loading...</p>;
  }

  return (
    <div className="article-details-container">
      <h1 className="details-title">{article.title}</h1>
      <img
        src={article.urlToImage || placeholderImage}
        alt={article.title}
        className="details-image"
      />
      <p className="details-author">By {article.author}</p>
      <p className="details-date">{new Date(article.publishedAt).toLocaleDateString()}</p>
      <p className="details-content">{article.content}</p>
      <div className="button-container">
        <Link to="/" className="news-details-back-button">Back To Home</Link>
        <a href={article.url} className="details-link-button" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
}

export default DetailedNews;
