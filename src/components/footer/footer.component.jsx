import React from 'react';

import './footer.styles.scss';

function Footer(props) {
  return (
    <footer>
      <nav>
        <a href='/about'>O nas</a>
      </nav>
      <p>@2020</p>
      <div>
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
      </div>
    </footer>
  );
}

export default Footer;
