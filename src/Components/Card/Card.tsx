import React from 'react';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiData from '../../api';

export class CardItem extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyItems: 'stretch',
          flexWrap: 'wrap',
          alignItems: 'start',
        }}
      >
        {apiData.map((item) => (
          <Card key={item?.id} style={{ width: '18rem', margin: '2rem' }}>
            <Card.Img variant="top" height="400px" src={item?.i?.imageUrl} />
            <Card.Body>
              <Card.Title>Name: {item?.l}</Card.Title>
              <Card.Text>
                {item?.q ? `Type: ` + item?.q : ''}
                <br />
                {item?.s ? `Actors: ` + item?.s : ''}
                <br />
                {item?.rank ? `Rank: ` + item?.rank : ''}
                <br />
                {item?.y ? `Release: ` + item?.y : ''}
                <br />
                {item?.yr ? `Years of production: ` + item?.yr : ''}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {item?.v ? `Screenshots: ` : ''}
              {item?.v?.map((r) => (
                <ListGroup.Item key={r?.id}>
                  <Card.Img variant="top" src={r?.i?.imageUrl} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        ))}
      </div>
    );
  }
}
