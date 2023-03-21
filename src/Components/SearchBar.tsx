import React, { Component } from 'react';

type InputProps = {
  placeholder: string;
};

export class SearchBar extends Component<InputProps> {
  state = {
    data: '',
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ data: e.currentTarget.value });
  };

  componentDidMount() {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      this.setState({ data: storedData });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('data', this.state.data);
  }

  render() {
    return (
      <>
        <label>
          <input
            style={{ background: 'white', color: 'black' }}
            placeholder={this.props.placeholder || 'Search...'}
            value={this.state.data}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <button> Search</button>
      </>
    );
  }
}
