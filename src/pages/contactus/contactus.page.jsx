import React from 'react';
import { connect } from 'react-redux';

import ContactCards from '../../components/contact-cards/contact-cards.component';

import ClockIcon from '../../assets/icons/clock.icon';
import './contactus.styles.scss';

const ContactUs = (props) => {
  const { restaurant } = props.currentRestaurant;

  console.log(restaurant);
  return (
    <>
      {restaurant ? (
        <div className='page container'>
          <h1>Kontakt</h1>
          <p>
            W razie jakichkolwiek pytań prosimy o kontakt w preferowany przez
            Państwa sposób:
          </p>
          <ContactCards restaurant={restaurant} />
          <div className='work-hours'>
            <h3 className='work-hours__title'>
              <span className='icon'>
                <ClockIcon />
              </span>
              <span className='text'>Godziny otwarcia</span>
            </h3>
            <ul className='work-hours__days'>
              <li>
                <span>Pon - Czw</span>
                <span>
                  {restaurant.workingHours[0].openAt} -{' '}
                  {restaurant.workingHours[0].closesAt}
                </span>
              </li>
              <li>
                <span>Pt - Sob</span>
                <span>
                  {restaurant.workingHours[1].openAt} -{' '}
                  {restaurant.workingHours[1].closesAt}
                </span>
              </li>
              <li>
                <span>Nd</span>
                <span>
                  {restaurant.workingHours[2].openAt} -{' '}
                  {restaurant.workingHours[2].closesAt}
                </span>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentRestaurant: state.currentRestaurant,
});

export default connect(mapStateToProps)(ContactUs);
