import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <header>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/">Return to the main page</Link>
    </header>
  );
}
