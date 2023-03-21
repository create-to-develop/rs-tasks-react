import React from 'react';
import { Component } from 'react';
import apiData from '../../api';
import { CardItem } from '../../Components/Card/Card';
import { SearchBar } from '../../Components/SearchBar';

console.log(apiData);

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Cards</h1>
        <SearchBar placeholder="..." />
        <CardItem />
      </>
    );
  }
}
