import React from 'react';
import { connect } from 'react-redux';

const Catering = (props) => {
  console.log('catering', props);

  const { restaurant } = props.currentRestaurant;

  return (
    <div>
      <h1>Catering</h1>
      <p>
        Potrzebują Państwo catering? Zapewniamy świeżo przygotowane i
        zaskakujące kompozycje sushi, dostarczone zawsze na czas. Wielkość
        zamówienia, form i składników zależą wyłącznie od Państwa, jednak zawsze
        pomagamy dostosować propozycję do oczekiwań.
      </p>
      <p>Serdecznie zapraszamy do kontaktu telefonicznego.</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentRestaurant: state.currentRestaurant,
});

export default connect(mapStateToProps)(Catering);
