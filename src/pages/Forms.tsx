import React, { Component } from 'react';
import UserCardsList from '../components/UserCardList/UserCardsList';
import Form from '../components/Form/Form';

export default class Forms extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 style={{ color: '#b1e926' }}>Form</h1>
        <Form />
        <UserCardsList />
      </div>
    );
  }
}
