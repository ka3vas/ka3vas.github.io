import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/button.component';

import './restaurant-card.styles.scss';
import PhoneIcon from '../../assets/icons/phone.icon';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className='restaurant-card__wrapper'>
      <Link to={restaurant.url}>
        <img
          width='150'
          height='150'
          src={restaurant.logo.img}
          alt={restaurant.logo.alt}
        />
      </Link>
      <div className='restaurant-card__info'>
        <Link to={restaurant.url} className='card-info__city'>
          {restaurant.city}
        </Link>
        <div className='card-info__address'>{`ul. ${restaurant.address[0].street} ${restaurant.address[0].number}`}</div>

        <div className='card-info__phone'>
          <Button phone={restaurant.phone} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
