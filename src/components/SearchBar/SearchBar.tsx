import React, { ChangeEvent, Component } from 'react';
import { SearchProps, SearchWordInterface } from 'types/interfaces';
import './SearchBar.css';

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
      <div style={{ marginBottom: '24px' }}>
        <label htmlFor="search__input">
          <input
            className="searchInput"
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
          <button className="searchBtn" aria-label={'searchBtn'} onClick={this.handleSearch}>
            Search
          </button>
        </label>
        &nbsp;
        <button className="resetBtn" onClick={this.resetSearch}>
          Reset
        </button>
      </div>
    );
  }
}
