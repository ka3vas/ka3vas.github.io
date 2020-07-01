import React from 'react';
import { Link } from 'react-router-dom';

import './restaurant-card.styles.scss';
import PhoneIcon from '../../assets/icons/phone.icon';
// import RestaurantIcon from '../../assets/icons/restaurant.icon';

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
          <a
            href={`tel:${restaurant.phone.directional}${restaurant.phone.number}`}
          >
            <span className='btn--round'>
              <PhoneIcon />
            </span>
            <span>
              {`+${
                restaurant.phone.directional
              } ${restaurant.phone.number.replace(/(.{3})/g, '$1 ')}`}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
