import React from 'react';

// import phoneIcon from '../../assets/icons/smartphone.svg';
import './card.style.scss';

function Card({ card }) {
  const { name, phone, img } = card;

  return (
    <div className='card'>
      <div className='card__image'>
        <img
          width='250'
          height='250'
          src={img}
          alt='urocza japonka podająca sushi'
        />
      </div>
      <div className='card__title'>{name}</div>
      <a href='/' className='card__phone btn'>
        {/* <img className='icon' src={phoneIcon} alt='icon' /> */}
        <span>{phone}</span>
      </a>
      <div className='card__open'>Otwarte</div>
    </div>
  );
}

export default Card;
