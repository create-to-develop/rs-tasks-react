import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">
            Home
          </NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/about">
            About us
          </NavLink>
        </nav>
      </header>
    );
  }
}
