import React, { Component } from 'react';
import { Form } from '../components/Form/Form';
import CardItem from '../components/CardItem';
import { x } from '../components/Form/Form';

export default class Forms extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1 style={{ color: '#b1e926' }}>Forms</h1>
        <Form />
        {/*{x.length > 0 ? <CardItem/> : ''}*/}
      </div>
    );
  }
}
