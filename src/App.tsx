import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

class App extends Component {
  render() {
    const pages = routes.map((route) => (
      <Route key={route.id} path={route.path} element={<route.element />} />
    ));

    return (
      <div className="App">
        <Header />
        <Routes>{pages}</Routes>
      </div>
    );
  }
}

export default App;
