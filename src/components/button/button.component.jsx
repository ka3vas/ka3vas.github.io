import React from 'react';

import './button.styles.scss';
import PhoneIcon from '../../assets/icons/phone.icon';

const Button = (props) => {
  const { phone } = props;

  return (
    <a
      className='call-btn'
      href={`tel:+${phone.directional}${phone.number.replace(/\s/g, '')}`}
    >
      <span className='btn--round'>
        <PhoneIcon />
      </span>
      <span>
        +{phone.directional} {phone.number}
      </span>
    </a>
  );
};

export default Button;
