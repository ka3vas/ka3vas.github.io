import React from 'react';

import CardList from '../../components/card-list/card-list.component';
import Card from '../../components/card/card.component';

import restaurants from '../../assets/data/restaurants';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {/* <CardList cardList={restaurants}>
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} card={restaurant} />
        ))}
      </CardList> */}
    </div>
  );
};

export default HomePage;
