import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends Component {
  render() {
    return (
      <div style={{ display: 'flex', paddingTop: 'calc(24%)', flexDirection: 'column' }}>
        <h1 style={{ color: '#b1e926' }}>404</h1>
        <h2>Page not found</h2>
        <Link to="/">Return to the Home page</Link>
      </div>
    );
  }
}
