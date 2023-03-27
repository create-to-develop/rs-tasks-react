import React from 'react';
import { Component } from 'react';
import { CardItem } from '../components/Card/Card';
import SearchBar from '../components/SearchBar/SearchBar';
import { EmptyProps, SearchWordInterface } from 'types/interfaces';

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
        <h1 style={{ color: '#b1e926' }}>Cards</h1>
        <SearchBar callback={this.handleSearchWord.bind(this)} />
        <CardItem />
      </>
    );
  }
}
