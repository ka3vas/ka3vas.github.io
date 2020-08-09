import React from 'react';

import './button.styles.scss';
import PhoneIcon from '../../assets/icons/phone.icon';

const Button = (props) => {
  const { phone } = props;

  return (
    <a className='call-btn' href={`tel:${phone.directional}${phone.number}`}>
      <span className='btn--round'>
        <PhoneIcon />
      </span>
      <span>
        +{phone.directional} {phone.number.replace(/(.{3})/g, '$1 ')}
      </span>
    </a>
  );
};

export default Button;
