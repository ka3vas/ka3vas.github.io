import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setCurrentRestaurant,
  setCurrentDishes,
} from '../../redux/restaurant/restaurant.actions';

import './restaurant.styles.scss';

import DishGroup from '../dish-group/dish-group.component';
// import DishGroupRoll from '../dish-group-roll/dish-group-roll.component';
import DishGroupSimple from '../dish-group-simple/dish-group-simple.component';
import CollectionFilter from '../collection-filter/collection-filter.component';

class Restaurant extends React.Component {
  componentDidMount() {
    const { setCurrentRestaurant, restaurant, setCurrentDishes } = this.props;

    setCurrentRestaurant(restaurant);
    setCurrentDishes(restaurant.items);
  }

  // return

  filterByCategory = (currentDishes, category) =>
    currentDishes.filter((dish) => dish.category === category);

  handleClick = (dishes, price) => {
    const lessThanDishes = dishes.filter((dish) => dish.price < price);
    this.props.setCurrentDishes(lessThanDishes);
  };

  getValue = (value) => {
    this.props.setCurrentDishes(value);
  };

  render() {
    const { filterByCategory } = this;
    const { restaurant } = this.props;
    const { currentDishes } = this.props.currentRestaurant;

    const set = filterByCategory(currentDishes, 'set');
    const poke = filterByCategory(currentDishes, 'poke');
    // const roll = filterByCategory(dishes, 'roll');
    const tempura = filterByCategory(currentDishes, 'tempura');
    const snack = filterByCategory(currentDishes, 'snack');
    const sauce = filterByCategory(currentDishes, 'sauce');

    return (
      <div className='restaurant-display'>
        <div className='go-back'>
          <Link to='/'>Z powrotem</Link>
        </div>
        <div className='menu'>
          <div className='menu_filters'>
            <CollectionFilter
              handleClick={this.getValue}
              currentArr={currentDishes}
              defaultArr={restaurant.dishes}
            />
            <ul>
              <li>Set</li>
              <li>Poke</li>
              <li>Tempura</li>
            </ul>
          </div>
          <div className='menu_dishes'>
            {poke.length > 0 ? <DishGroup menu={poke[0]} /> : null}
            {set.length > 0 ? <DishGroup menu={set[0]} /> : null}
            {/* {roll.length > 0 ? <DishGroupRoll dishes={roll} /> : null} */}
            {tempura.length > 0 ? <DishGroupSimple menu={tempura[0]} /> : null}
            {snack.length > 0 ? <DishGroupSimple menu={snack[0]} /> : null}
            {sauce.length > 0 ? <DishGroupSimple menu={sauce[0]} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentRestaurant: state.currentRestaurant,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentRestaurant: (restaurant) =>
    dispatch(setCurrentRestaurant(restaurant)),

  setCurrentDishes: (currentDishes) =>
    dispatch(setCurrentDishes(currentDishes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
