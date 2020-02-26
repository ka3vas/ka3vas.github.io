import React from 'react';

import './navigation.styles.scss';

function Navigation(props) {
  return (
    <nav className='navigation'>
      <a href='/'>home</a>
      <a href='/'>menu</a>
      <a href='/'>kontakt</a>
      <a href='/'>catering</a>
    </nav>
  );
}

export default Navigation;
