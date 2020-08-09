import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import ContactCards from '../../components/contact-cards/contact-cards.component';

import ClockIcon from '../../assets/icons/clock.icon';
import './contactus.styles.scss';

// import bgImgSm from '../../assets/images/stock/contact-us-sm.jpg';
// import bgImgMd from '../../assets/images/stock/contact-us-md.jpg';
// import bgImgLg from '../../assets/images/stock/contact-us-lg.jpg';

import bgImgSm from '../../assets/images/stock/contact-us-2-sm.jpg';
import bgImgMd from '../../assets/images/stock/contact-us-2-md.jpg';
import bgImgLg from '../../assets/images/stock/contact-us-2-lg.jpg';

const ContactUs = (props) => {
  const [image, setImage] = useState(bgImgSm);

  const { restaurant } = props.currentRestaurant;

  useEffect(() => {
    const width = window.innerWidth;
    width > 640
      ? width > 1200
        ? setImage(bgImgLg)
        : setImage(bgImgMd)
      : setImage(bgImgSm);
  }, []);

  console.log(restaurant);
  return (
    <>
      {restaurant ? (
        <div className='page container'>
          <div
            className='page__image'
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
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
