import React, { ChangeEvent, Component } from 'react';
import { SearchProps, SearchWordInterface } from 'types/interfaces';

export default class SearchBar extends Component<SearchProps, SearchWordInterface> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { searchWord: '' };
  }

  componentDidMount(): void {
    const storagedInput = localStorage.getItem('storagedInput');
    if (storagedInput) {
      this.setState({ searchWord: storagedInput });
    }
  }

  onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchWord: event.target.value });
  };
  handleSearch = () => {
    this.props.callback(this.state.searchWord);
  };
  resetSearch = () => {
    this.setState({ searchWord: '' });
    this.props.callback('');
  };
  componentWillUnmount(): void {
    const { searchWord } = this.state;
    localStorage.setItem('storagedInput', searchWord);
  }

  render(): React.ReactNode {
    return (
      <div>
        <label htmlFor="search__input">
          <input
            type="text"
            role="searchbox"
            id="search__input"
            placeholder="Search..."
            value={this.state.searchWord}
            onChange={this.onChangeHandle}
            onKeyDown={(e) => {
              if (e.key === 'Enter') this.handleSearch();
            }}
          />
          <button
            style={{ background: 'darkblue' }}
            aria-label={'searchBtn'}
            onClick={this.handleSearch}
          >
            Search
          </button>
        </label>
        &nbsp;
        <button style={{ background: 'darkred' }} onClick={this.resetSearch}>
          RESET
        </button>
      </div>
    );
  }
}
