import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/about">About us</Link>
        </nav>
      </header>
    );
  }
}
