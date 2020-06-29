import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FacebookIcon from '../../assets/icons/facebook.icon-component';
import InstagramkIcon from '../../assets/icons/instagram.icon-component';

import defaultImg from '../../assets/images/torun.png';

import './navigation.styles.scss';

function Navigation(props) {
  // const { img = null, city = null } = props.currentRestaurant.restaurant;
  console.log(props.currentRestaurant);

  const { restaurant } = props.currentRestaurant;

  return (
    <div className='navigation'>
      <div></div>
      <nav>
        <div className='logo'>
          <Link to='/'>
            {restaurant ? (
              <>
                <img src={restaurant.img} alt='logo' width='150' height='150' />
              </>
            ) : (
              <>
                <img src={defaultImg} alt='logo' width='150' height='150' />
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
              <div className='social__city'>{restaurant.city}</div>
              <a
                href={restaurant.facebook}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FacebookIcon />
              </a>
              <a
                href={restaurant.instagram}
                target='_blank'
                rel='noopener noreferrer'
              >
                <InstagramkIcon />
              </a>
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
