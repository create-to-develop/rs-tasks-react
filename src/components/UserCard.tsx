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
    if (card.notificationsOff) notification.push('no');
    if (card.notificationsOn) notification.push('yes');
    const strNotification = notification.join(', ');

    return (
      <div className="form-card">
        <div className="form-card__about">
          <div className="form-card__name">{card.name}</div>
          <div className="form-card__name">{card.birthday}</div>
          <div className="form-card__name">{card.country}</div>
          <div className="form-card__name">{card.gender}</div>
          <div className="form-card__name">{strNotification}</div>
          <img className="form-card__img" src={card.picture} alt="picture" />
        </div>
      </div>
    );
  }
}
