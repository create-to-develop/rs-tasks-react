import React from 'react';
import { FormProps } from '../types/interfaces';

type CardType = {
  card: FormProps;
};

export default class UserCard extends React.Component<CardType, object> {
  render() {
    const { card } = this.props;

    return (
      <div className="form-card">
        <div className="form-card__about">
          <div className="form-card__name">{card.name}</div>
        </div>
      </div>
    );
  }
}
