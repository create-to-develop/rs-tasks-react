import React from 'react';
import { Component } from 'react';
import apiData from '../../api';
import { CardItem } from '../../Components/Card';
import SearchBar from '../../Components/SearchBar';
import { EmptyProps, SearchWordInterface } from 'types/interfaces';

console.log(apiData);

export default class Home extends Component<EmptyProps, SearchWordInterface> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = { searchWord: '' };
  }

  handleSearchWord(word: string) {
    this.setState({ searchWord: word });
  }

  render() {
    return (
      <>
        <h1>Cards</h1>
        <SearchBar callback={this.handleSearchWord.bind(this)} />
        <CardItem />
      </>
    );
  }
}
