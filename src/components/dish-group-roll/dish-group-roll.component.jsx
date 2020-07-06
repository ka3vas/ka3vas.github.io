import React from 'react';

import './dish-group-roll.styles.scss';

function DishGroupRoll(props) {
  console.log(props);

  return (
    <div className='dish-group__container'>
      <div className='dish-group'>
        <h2 className='dish-group__title'>{props.menu.title}</h2>
        <p>{props.menu.description}</p>
        <div className='dish-group-roll__wrapper'>
          {props.menu.dishes.map((dish) => {
            const { title, price, quantity, description } = dish;

            return (
              <div className='dish-card' key={title}>
                <div className='dish-card__image'>
                  {dish.imgSrc ? (
                    <img src={dish.imgSrc} height='400' alt='sushi' />
                  ) : null}
                </div>
                <h3 className='dish-card__title'>{title}</h3>
                <div className='dish-card__price'>
                  {(price.five / 100).toFixed(2)} zł /{' '}
                  {(price.eight / 100).toFixed(2)} zł
                </div>
                {quantity ? (
                  <div className='dish-card__quantity'>
                    {quantity.five} szt. / {quantity.eight} szt.
                  </div>
                ) : null}
                <div className='dish-card__description'>{description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DishGroupRoll;
