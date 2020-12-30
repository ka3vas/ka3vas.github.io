import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './classic-sushi.styles.scss';

const ClassicShushi = ({ menu }) => {
  console.log('menu', menu);

  return (
    <div className='dish-group__container'>
      <div className='dish-group dish-group--simple'>
        <h2>{menu.title}</h2>
        <div className='classic-menu'>
          {menu.dishes.map((dish, i) => (
            <div key={i} className='dish-group__classic'>
              <div className='flex-spread border-bt'>
                <span className='title'>{dish.title}</span>
                <span>{dish.quantity} szt.</span>
              </div>{' '}
              {dish.dish.map((test, i) => {
                return (
                  <p key={i} className='flex-spread'>
                    <span>{test.title}</span>
                    <span>
                      {test.priceDiffers
                        ? `${(test.priceMin / 100).toFixed(2)}zł / ${(
                            test.priceMax / 100
                          ).toFixed(2)}zł`
                        : `${(test.price / 100).toFixed(2)}zł`}
                    </span>
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassicShushi;
