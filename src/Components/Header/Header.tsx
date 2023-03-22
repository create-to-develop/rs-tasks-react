import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { EmptyProps } from '../../types/interfaces';

export default class Header extends Component<EmptyProps, { pageName: string }> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = { pageName: 'Main Page' };
  }

  componentDidMount(): void {
    this.changePageTo404();
  }

  changePageTo404() {
    let loc = location.href;
    loc = loc.slice(loc.lastIndexOf('/'));
    if (loc !== '/' && loc !== '/about') this.setState({ pageName: '404' });
  }

  render() {
    return (
      <header>
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Page: {this.state.pageName}</h3>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to="/"
            onClick={() => this.setState({ pageName: 'Main page' })}
          >
            Home
          </NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to="/about"
            onClick={() => this.setState({ pageName: 'About us' })}
          >
            About us
          </NavLink>
        </nav>
      </header>
    );
  }
}
