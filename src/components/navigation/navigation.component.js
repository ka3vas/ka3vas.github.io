import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../assets/images/torun.png';

import './navigation.styles.scss';

function Navigation(props) {
  return (
    <div className='navigation'>
      <nav>
        <Link to='/'>
          <img src={img} alt='logo' width='75' height='75' />
        </Link>
        <Link to='/contactus'>kontakt</Link>
        <Link to='/catering'>catering</Link>
      </nav>
    </div>
  );
}

export default Navigation;
