import React from 'react';
// import { Link } from 'react-router-dom';

// import FacebookIcon from '../../assets/icons/facebook.icon-component';
// import InstagramkIcon from '../../assets/icons/instagram.icon-component';

import './footer.styles.scss';

function Footer(props) {
  return (
    <footer className='main-footer'>
      <div className='links'>
        {/* <div className='location'>
          <h5>Lokale:</h5>
          <ul>
            {props.restaurants.map((restaurant) => (
              <li key={restaurant.id}>
                <Link to={restaurant.url}>{restaurant.city}</Link>
              </li>
            ))}
          </ul>
        </div> */}
        {/* <div className='pages'>
          <h5>O nas:</h5>
          <ul>
            <Link to='/about'>Catering</Link>
          </ul>
        </div> */}
      </div>
      {/* this will go to restaurant specific footer */}
      {/* <div className='social'>
        <FacebookIcon />
        <InstagramkIcon />
      </div> */}
      <div className='copy'>
        All rights reserved Copyright © 2020 <br /> Sushipokego
      </div>
      {/* <div>
        Icons made by{' '}
        <a
          href='https://www.flaticon.com/authors/smashicons'
          title='Smashicons'
        >
          Smashicons
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by{' '}
        <a
          href='https://www.flaticon.com/authors/pixel-perfect'
          title='Pixel perfect'
        >
          Pixel perfect
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by{' '}
        <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
          Freepik
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div> */}
    </footer>
  );
}

export default Footer;
