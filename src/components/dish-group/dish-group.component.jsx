import React from 'react';

import './dish-group.styles.scss';

function DishGroup({ dishSet }) {
  const { title, set } = dishSet;

  return (
    <div className='dish-group__container'>
      <div className='dish-group'>
        <h2 className='dish-group__title'>{title}</h2>
        <div className='dish-group__wrapper'>
          {set.map((dish) => {
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
                  {(price / 100).toFixed(2)} zł
                </div>
                {quantity ? (
                  <div className='dish-card__quantity'>{quantity} szt.</div>
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

export default DishGroup;
