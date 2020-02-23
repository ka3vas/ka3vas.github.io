import React from 'react';

import Card from '../card/card.component';

import restaurants from '../../assets/data/restaurants';

function CardList(props) {
  return (
    <div className='cards-display'>
      {restaurants.map(restaurant => {
        return <Card key={restaurant.id} restaurant={restaurant} />;
      })}
    </div>
  );
}

export default CardList;
