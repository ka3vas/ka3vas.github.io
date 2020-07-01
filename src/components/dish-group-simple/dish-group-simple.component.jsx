import React from 'react';

import './dish-group-simple.styles.scss';

const DishGroupSimple = ({ dishes }) => {
  return (
    <div className='dish-group__container'>
      <div className='dish-group'>
        <h2>{dishes[0].category}</h2>
        {dishes.map((dish, i) => (
          <h4 key={i}>{dish.title}</h4>
        ))}
      </div>
    </div>
  );
};

export default DishGroupSimple;
