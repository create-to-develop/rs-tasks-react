import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/about">About us</Link>
      </nav>
      <h1>Home</h1>
    </header>
  );
}
