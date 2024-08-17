import React from 'react';

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <h2>{article.title}</h2>
      <p>{article.author ? `By: ${article.author}` : 'Author not available'}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default NewsCard;
