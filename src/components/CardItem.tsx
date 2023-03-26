import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { x } from './Form/Form';

interface CardProps {
  // item: {
  //     name: string;
  //     surname: string;
  //     zipCode: number;
  //     birthday: string;
  //     deliveryDate: string;
  //     country: string;
  //     state: string;
  // };
}

export default class CardItem extends React.Component<CardProps> {
  render() {
    // const {
    //     name,
    //     surname,
    //     zipCode,
    //     birthday,
    //     deliveryDate,
    //     country,
    //     state,
    // } = this.props.item;

    return (
      <>
        {x?.map((i: any) => (
          <Card key={i?.zipCode} style={{ width: '22rem', margin: '0.5rem' }}>
            <Card.Body>
              <Card.Title>Name: {i?.name}</Card.Title>
              <Card.Text>
                <p>Name: {i?.name}</p>
                <p>Surname: {i?.surname}</p>
                <p>Zip Code: {i?.zipCode}</p>
                <p>Birthday: {i?.birthday}</p>
                <p>Delivery Date: {i?.deliveryDate}</p>
                <p>Country: {i?.country}</p>
                <p>State: {i?.state}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}
