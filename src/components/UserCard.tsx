import React from 'react';
import { FormProps } from '../types/interfaces';
import './UserCard.css';

type CardType = {
  card: FormProps;
};

export default class UserCard extends React.Component<CardType, object> {
  render() {
    const { card } = this.props;

    const notification: string[] = [];
    if (card.notificationsOff) notification.push('Book');
    if (card.notificationsOn) notification.push('T-shirt');
    const strNotification = notification.join(', ');

    return (
      <div className="form-card">
        <div className="form-card__about">
          <div className="form-card__name">Name: {card.name}</div>
          <div className="form-card__name">Birthday: {card.birthday}</div>
          <div className="form-card__name">Country: {card.country}</div>
          <div className="form-card__name">Gender: {card.gender}</div>
          <div className="form-card__name">Gift: {strNotification}</div>
          <img className="form-card__img" src={card.picture} alt="picture" />
        </div>
      </div>
    );
  }
}
