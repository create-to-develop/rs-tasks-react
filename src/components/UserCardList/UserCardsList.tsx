import React, { Component } from 'react';
import { FormProps } from '../../types/interfaces';
import UserCard from '../UserCard/UserCard';
import './UserCardList.css';

type Props = {
  cards: Array<FormProps>;
};
export default class UserCardsList extends Component<Props, object> {
  render() {
    const { cards } = this.props;
    const cardsList: JSX.Element[] = [];
    cards.forEach((card, i) => {
      const key = `${i}-${card.name} `;
      cardsList.push(<UserCard card={card} key={key} />);
    });
    return (
      <div className="card-list">
        <div className="container">
          <div className="card-list__inner">{cardsList}</div>
        </div>
      </div>
    );
  }
}
