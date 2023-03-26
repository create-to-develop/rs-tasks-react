import React from 'react';
import { Component } from 'react';
import apiData from '../data/api';

export class CardItem extends Component {
  render() {
    return (
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {apiData.map((item) => (
          <div>Name: {item?.name}</div>
          // <Card key={item?.id} style={{ width: '22rem', margin: '0.5rem' }}>
          //   <Card.Img variant="top" src={item?.image} />
          //   <Card.Body>
          //     <Card.Title>Name: {item?.name}</Card.Title>
          //     <Card.Text>
          //       {item?.species ? `Species: ` + item?.species : ''}
          //       <br />
          //       {item?.gender ? `Gender: ` + item?.gender : ''}
          //       <br />
          //       {item?.origin?.name ? `From: ` + item?.origin?.name : ''}
          //       <br />
          //       {item?.location?.name ? `Living: ` + item?.location?.name : ''}
          //     </Card.Text>
          //     <Card.Link href={item?.url}>Check full API</Card.Link>
          //   </Card.Body>
          // </Card>
        ))}
      </div>
    );
  }
}
