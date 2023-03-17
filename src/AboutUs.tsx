import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/about">About us</Link>
      </nav>
      <h1>About Us</h1>
    </header>
  );
}
