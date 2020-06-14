import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantPicker = (props) => {
  return (
    <div>
      <h2>Restaurant component</h2>
      <ul>
        {props.restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link to={restaurant.url}>{restaurant.city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPicker;
