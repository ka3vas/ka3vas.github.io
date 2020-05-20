import React from 'react';

import img from '../../assets/images/torun.png';

import './navigation.styles.scss';

function Navigation(props) {
  return (
    <div className='navigation'>
      <nav>
        <a href='/'>
          <img src={img} alt='logo' width='75' height='75' />
        </a>
        <a href='/'>menu</a>
        <a href='/'>kontakt</a>
        <a href='/'>catering</a>
      </nav>
    </div>
  );
}

export default Navigation;
