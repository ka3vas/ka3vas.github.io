import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './dish-group-simple.styles.scss';

const DishGroupSimple = ({ menu }) => {
  return (
    <div className='dish-group__container'>
      <div className='dish-group dish-group--simple'>
        <h2>{menu.title}</h2>
        <div className='dish-group__grid'>
          {menu.img ? (
            <LazyLoadImage
              src={menu.img.src}
              alt={menu.img.alt}
              threshold={300}
              height={250}
              effect='blur'
            />
          ) : null}
          <div>
            {menu.dishes.map((dish, i) => (
              <p key={i}>
                <span>{dish.title}</span>{' '}
                <span>{(dish.price / 100).toFixed(2)} zł</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishGroupSimple;
