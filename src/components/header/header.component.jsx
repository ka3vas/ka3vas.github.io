import React from 'react';
import CardList from '../card-list/card-list.component';
import Card from '../card/card.component';

const Header = ({ video, restaurants }) => {
  return (
    <header className='hero'>
      <CardList cardList={restaurants}>
        {restaurants.map(restaurant => (
          <Card key={restaurant.id} card={restaurant} />
        ))}
      </CardList>

      <video className='video-bg' autoPlay muted loop>
        <source src={video} />
      </video>
    </header>
  );
};

export default Header;
