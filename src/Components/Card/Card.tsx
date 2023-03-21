import React from 'react';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiData from '../../api';

export class CardItem extends Component {
  render() {
    return apiData.map((item) => (
      <Card key={item?.id} style={{ width: '18rem', marginBottom: '2rem' }}>
        <Card.Img variant="top" src={item?.i?.imageUrl} />
        <Card.Body>
          <Card.Title>Name: {item?.l}</Card.Title>
          <Card.Text>
            Type: {item?.q}
            <br />
            Actors: {item?.s}
            <br />
            Rank: {item?.rank}
            <br />
            Release: {item?.y}
            <br />
            Years of production: {item?.yr}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          Screenshots:
          {item?.v?.map((r) => (
            <ListGroup.Item key={r?.id}>
              <Card.Img variant="top" src={r?.i?.imageUrl} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    ));
  }
}
