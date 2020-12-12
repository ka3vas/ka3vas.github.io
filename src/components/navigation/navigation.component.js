import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FacebookIcon from '../../assets/icons/facebook.icon';
import InstagramIcon from '../../assets/icons/instagram.icon';

import defaultImg from '../../assets/images/torun.png';

import './navigation.styles.scss';

function Navigation(props) {
  const { restaurant } = props.currentRestaurant;

  return (
    <div className='navigation'>
      <div></div>
      <nav>
        <div className='logo'>
          <Link to='/'>
            {restaurant ? (
              <>
                <img
                  src={restaurant.logo.img}
                  alt='logo'
                  width='125'
                  height='125'
                />
              </>
            ) : (
              <>
                <img src={defaultImg} alt='logo' width='125' height='125' />
              </>
            )}
          </Link>
          {restaurant ? (
            <>
              <Link to='/contactus'>kontakt</Link>
              <Link to='/catering'>catering</Link>
            </>
          ) : null}
        </div>
        <div className='social__wrapper'>
          {restaurant ? (
            <>
              <Link to={restaurant.url} className='social__city'>
                {restaurant.city}
              </Link>
              {restaurant.facebook ? (
                <a
                  href={restaurant.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FacebookIcon />
                </a>
              ) : null}
              {restaurant.instagram ? (
                <a
                  href={restaurant.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <InstagramIcon />
                </a>
              ) : null}
            </>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentRestaurant: state.currentRestaurant,
});

export default connect(mapStateToProps)(Navigation);
