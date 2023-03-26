import React from 'react';

interface CardProps {
  item: {
    name: string;
    surname: string;
    zipCode: number;
    birthday: string;
    deliveryDate: string;
    country: string;
    state: string;
  };
}

export default class CardItem extends React.Component<CardProps> {
  render() {
    return (
      <></>
      //   {x?.map((i: CardProps) => (
      //     <Card key={i?.item.zipCode} style={{ width: '22rem', margin: '0.5rem' }}>
      //       <Card.Body>
      //         <Card.Title>Name: {i?.item.name}</Card.Title>
      //         <Card.Text>
      //           <p>Name: {i?.item.name}</p>
      //           <p>Surname: {i?.item.surname}</p>
      //           <p>Zip Code: {i?.item.zipCode}</p>
      //           <p>Birthday: {i?.item.birthday}</p>
      //           <p>Delivery Date: {i?.item.deliveryDate}</p>
      //           <p>Country: {i?.item.country}</p>
      //           <p>State: {i?.item.state}</p>
      //         </Card.Text>
      //       </Card.Body>
      //     </Card>
      //   ))}
      // </>
    );
  }
}
