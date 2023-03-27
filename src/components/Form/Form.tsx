import React, { Component } from 'react';
import { FormAddCard } from '../FormAddCard/FormAddCard';
import { FormProps } from '../../types/interfaces';

type Props = object;

type State = {
  data: Array<FormProps>;
};

export default class Form extends Component<Props, State> {
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
    return (
      <>
        <FormAddCard onSubmit={this.handleData} />
      </>
    );
  }
}
