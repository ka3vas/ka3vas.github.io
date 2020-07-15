import React, { useState, useEffect } from 'react';

import './mobile-cta.styles.scss';
import PhoneIcon from '../../assets/icons/phone.icon';

const MobileCta = ({ phone }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const fullNumber = phone.directional + phone.number;
  return (
    <>
      {width <= 768 ? (
        <div className='mobile-cta__wrapper'>
          <div className='mobile-cta'>
            <a href={`tel:${fullNumber}`}>
              <PhoneIcon />
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileCta;
