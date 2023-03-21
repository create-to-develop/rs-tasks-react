import React from 'react';
import { Component } from 'react';
import apiData from '../../api';
import { CardItem } from '../../Components/Card/Card';

console.log(apiData);

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Cards</h1>
        <CardItem />
      </>
    );
  }
}
