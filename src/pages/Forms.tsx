import React, { Component } from 'react';
import UserCards from '../components/UserCards';
import Form from '../components/Form/Form';

export default class Forms extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 style={{ color: '#b1e926' }}>Form</h1>
        <Form />
        <UserCards />
      </div>
    );
  }
}
