import React from 'react';

import './card.style.scss';

function Card(props) {
  console.log(props);
  const { name, phone, img } = props.restaurant;

  return (
    <div className='card'>
      <div className='card__image'>
        <img
          width='300'
          height='300'
          src={img}
          alt='urocza japonka podająca sushi'
        />
      </div>
      <div className='card__title'>{name}</div>
      <a href='/' className='card__phone btn'>
        {phone}
      </a>
      <div className='card__open'>Otwarte</div>
    </div>
  );
}

export default Card;
