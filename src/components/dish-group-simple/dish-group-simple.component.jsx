import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './dish-group-simple.styles.scss';

const DishGroupSimple = ({ menu }) => {
  return (
    <div className='dish-group__container'>
      <div className='dish-group'>
        <h2>{menu.category}</h2>
        <div>
          {menu.img ? (
            <LazyLoadImage
              src={menu.img.src}
              alt={menu.img.alt}
              height={400}
              threshold={100}
              effect='blur'
            />
          ) : null}
          <div>
            {menu.dishes.map((dish, i) => (
              <p key={i}>
                {dish.title} {dish.price}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishGroupSimple;
