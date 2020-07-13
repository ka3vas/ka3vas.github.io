import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './dish-group.styles.scss';

function DishGroup(props) {
  const { menu } = props;

  const { dishes, category } = menu;

  return (
    <div id={`dish-group__${category}`} className='dish-group__container'>
      <div className='dish-group'>
        <h2 className='dish-group__title'>{menu.title}</h2>
        {<p>{menu.description}</p>}
        <div className='dish-group__wrapper'>
          {dishes.map((dish) => {
            const { title, price, quantity, description } = dish;

            return (
              <div className='dish-card' key={title}>
                <div className='dish-card__image'>
                  {dish.imgSrc ? (
                    <LazyLoadImage
                      src={dish.imgSrc}
                      alt={'sushi'}
                      height={200}
                      width={200}
                      threshold={100}
                      effect='blur'
                    />
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
