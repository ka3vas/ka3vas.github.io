import React from 'react';

import './restaurant-picker.styles.scss';

import RestaurantCard from '../restaurant-card/restaurant-card.component';

const RestaurantPicker = (props) => {
  return (
    <div className='restaurant-picker__wrapper'>
      <h2>Wybierz miasto</h2>
      <ul>
        {props.restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPicker;
