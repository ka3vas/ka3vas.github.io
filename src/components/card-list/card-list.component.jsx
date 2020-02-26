import React from 'react';

import './card-list.styles.scss';

function CardList({ children }) {
  return (
    <div className='card-list__wrapper'>
      <div className='card-list'>{children}</div>
    </div>
  );
}

export default CardList;
