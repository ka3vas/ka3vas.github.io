import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './mobile-navigation.styles.scss';
import HamburgerMenu from '../../assets/icons/hammburger-menu.icon';
import FacebookIcon from '../../assets/icons/facebook.icon';
import InstagramIcon from '../../assets/icons/instagram.icon';

const MobileNavigation = (props) => {
  console.log(props);

  const [isOpen, setOpen] = useState(false);

  const { restaurant } = props.currentRestaurant;

  return (
    <>
      {restaurant ? (
        <div className='mobile-navigation__wrapper'>
          <div className='mobile-navigation'>
            <button onClick={() => setOpen(!isOpen)}>
              <HamburgerMenu />
            </button>
            <div className='restaurant-content'>
              {/* create logo component for mobile and normal nav */}
              <img
                src={restaurant.logo.img}
                alt='logo'
                width='50'
                height='50'
              />
              <span> {restaurant.city} </span>
            </div>
          </div>
          <div className={`mobile-menu__wrapper ${isOpen ? 'active' : null}`}>
            <div className='mobile-menu'>
              <div className='mobile-menu__header'>
                <button onClick={() => setOpen(!isOpen)}>X</button>
              </div>
              <div className='mobile-menu__navigation mt-25'>
                <ul>
                  <li>
                    <Link
                      to={`/${restaurant.url}`}
                      onClick={() => setOpen(!isOpen)}
                    >
                      menu
                    </Link>
                  </li>
                  <li>
                    <Link to='/contactus' onClick={() => setOpen(!isOpen)}>
                      kontakt
                    </Link>
                  </li>
                  <li>
                    <Link to='/catering' onClick={() => setOpen(!isOpen)}>
                      catering
                    </Link>
                  </li>
                  <li>
                    <Link to='/' onClick={() => setOpen(!isOpen)}>
                      restauracje
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='mobile-menu__footer'>
                <div>
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
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className='restaurant-header'>SUSHI POKE GO</h1>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentRestaurant: state.currentRestaurant,
});

export default connect(mapStateToProps)(MobileNavigation);
