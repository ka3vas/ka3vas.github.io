import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Button from '../../components/button/button.component';

import './catering.styles.scss';
import bgImgSm from '../../assets/images/stock/catering-sm.jpg';
import bgImgMd from '../../assets/images/stock/catering-md.jpg';
import bgImgLg from '../../assets/images/stock/catering-lg.jpg';

const Catering = (props) => {
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

  return (
    <div className='catering__wrapper'>
      <div className='display-wrapper'>
        <div className='catering__image'>
          <LazyLoadImage src={image} alt={'TOADD'} />
        </div>
        <div className='catering__text'>
          <h1>Catering</h1>
          <div className='wrapper'>
            <div className='border--dash'>
              <p>
                Zapewniamy świeżo przygotowane i zaskakujące kompozycje sushi,
                dostarczone zawsze na czas. Wielkość zamówienia, form i
                składników zależą wyłącznie od Państwa, jednak zawsze pomagamy
                dostosować propozycję do oczekiwań.
              </p>
              <p>Serdecznie zapraszamy do kontaktu telefonicznego.</p>
              {restaurant ? <Button phone={restaurant.phone} /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentRestaurant: state.currentRestaurant,
});

export default connect(mapStateToProps)(Catering);
