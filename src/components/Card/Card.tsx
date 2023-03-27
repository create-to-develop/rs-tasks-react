import React from 'react';
import { Component } from 'react';
import apiData from '../../data/api';
import './Card.css';

export class CardItem extends Component {
  render() {
    return (
      <>
        <h3>Sorry. The page is under construction after deleting style library</h3>
        <div className="pageWithCardsWrapper">
          {apiData.map((item) => (
            <div className="cardWrapper" key={item?.id}>
              <h4>Name: {item?.name}</h4>
              <img className="picStyle" alt="card-image" src={item?.image} />
              <p className="cardText">
                {item?.species ? `Species: ` + item?.species : ''}
                <br />
                {item?.gender ? `Gender: ` + item?.gender : ''}
                <br />
                {item?.origin?.name ? `From: ` + item?.origin?.name : ''}
                <br />
                {item?.location?.name ? `Living: ` + item?.location?.name : ''}
              </p>
              <a className="linkStyle" href={item?.url}>
                Check full API
              </a>
            </div>
          ))}
        </div>
      </>
    );
  }
}
