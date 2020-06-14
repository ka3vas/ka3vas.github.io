import React from 'react';
import FacebookIcon from '../../assets/icons/facebook.icon-component';
import InstagramkIcon from '../../assets/icons/instagram.icon-component';

const Header = ({ video }) => {
  return (
    <header className='hero'>
      <div className='fb-icon'>
        <FacebookIcon />
        <InstagramkIcon />
      </div>
      <video className='video-bg' autoPlay muted loop>
        <source src={video} />
      </video>
    </header>
  );
};

export default Header;
