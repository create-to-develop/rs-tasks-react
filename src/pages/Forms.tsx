import React, { Component } from 'react';
import UserCardsList from '../components/UserCardList/UserCardsList';
import { FormProps } from '../types/interfaces';
import FormAddCard from '../components/FormAddCard/FormAddCard';

type Props = object;

type State = {
  data: Array<FormProps>;
};

export default class Forms extends Component<Props, State> {
  constructor(props: object) {
    super(props);
    this.state = { data: [] };
    this.handleData = this.handleData.bind(this);
  }

  handleData(dataCard: FormProps) {
    this.setState((prevState) => ({
      data: [...prevState.data, dataCard],
    }));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="wrapper">
        <h1 style={{ color: '#b1e926' }}>Form</h1>
        <FormAddCard onSubmit={this.handleData} />
        <UserCardsList cards={data} />
      </div>
    );
  }
}
