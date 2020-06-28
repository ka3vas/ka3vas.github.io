import React from 'react';

const Header = ({ video }) => {
  return (
    <header className='hero'>
      <video className='video-bg' autoPlay muted loop>
        <source src={video} />
      </video>
    </header>
  );
};

export default Header;
