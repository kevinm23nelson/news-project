import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // Ensure to create this CSS file

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <Link to="/" className="not-found-button">Back To Home</Link>
    </div>
  );
}

export default NotFoundPage;
