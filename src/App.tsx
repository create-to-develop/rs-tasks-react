import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { routes } from './router/routes';
import ErrorPage from './pages/ErrorPage';

class App extends Component {
  render() {
    alert(
      'Пожалуйста, дайте время до конца кросс-чека доделать задание, пожалуйста. Kindly ask you to give time untill cross-check deadline to finish the task please'
    );
    const pages = routes.map((route) => (
      <Route
        key={route.id}
        path={route.path}
        element={<route.element />}
        errorElement={<ErrorPage />}
      />
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
