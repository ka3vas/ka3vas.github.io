import React from 'react';

import ClipboardCopy from '../clipboard-copy/clipboard-copy.component';

import PhoneIcon from '../../assets/icons/phone.icon';
import SendEmail from '../../assets/icons/send-email.icon';
import PointMarker from '../../assets/icons/point-marker.icon';
import './contact-cards.styles.scss';

const ContactCards = ({ restaurant }) => {
  const phone = restaurant.phone.directional + restaurant.phone.number;
  const email = restaurant.email;
  const address =
    restaurant.city +
    ', ' +
    restaurant.address[0].street +
    ' ' +
    restaurant.address[0].number;

  return (
    <div className='contact-cards'>
      <div className='contact-card'>
        <ClipboardCopy value={phone} />
        <div className='contact-card__icon'>
          <PhoneIcon />
        </div>
        <div className='contact-card__title'>telefon</div>
        <div className='contact-card__info'>
          <a
            className='action-btn'
            href={`tel:${restaurant.phone.directional}${restaurant.phone.number}`}
          >
            +{restaurant.phone.directional}{' '}
            {restaurant.phone.number.replace(/(.{3})/g, '$1 ')}
          </a>
        </div>
      </div>
      <div className='contact-card'>
        <ClipboardCopy value={email} />
        <div className='contact-card__icon'>
          <SendEmail />
        </div>
        <div className='contact-card__title'>email</div>
        <div className='contact-card__info'>
          <a className='action-btn' href={`mailto:${restaurant.email}`}>
            <span>{restaurant.email}</span>
          </a>
        </div>
      </div>
      <div className='contact-card'>
        <ClipboardCopy value={address} />
        <div className='contact-card__icon'>
          <PointMarker />
        </div>
        <div className='contact-card__title'>osobiście</div>
        <div className='contact-card__info contact-card__info--text'>
          <span>{restaurant.city}, </span>
          <span>
            ul. {restaurant.address[0].street} {restaurant.address[0].number}
          </span>
        </div>
      </div>

      {/* <address>

        <p>
          <a href={`mailto:${restaurant.email}`}>
            <SendEmail />
            <span>{restaurant.email}</span>
          </a>
        </p>
        <p>telefonicznie:</p>
        <p>
          <a
            href={`tel:${restaurant.phone.directional}${restaurant.phone.number}`}
          >
            <PhoneIcon />+{restaurant.phone.directional}{' '}
            {restaurant.phone.number.replace(/(.{3})/g, '$1 ')}
          </a>
        </p>
        <p>lub osobiście:</p>
        <p>
          <div>
            <PointMarker />
            <span>{restaurant.city}, </span>
            <span>
              ul. {restaurant.address[0].street} {restaurant.address[0].number}
            </span>
          </div>
        </p>
        <p></p>
      </address> */}
    </div>
  );
};

export default ContactCards;
