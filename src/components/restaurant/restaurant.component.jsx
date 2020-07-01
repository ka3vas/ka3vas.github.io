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
import CollectionFilter from '../collection-filter/collection-filter.component';

class Restaurant extends React.Component {
  componentDidMount() {
    const { setCurrentRestaurant, restaurant, setCurrentDishes } = this.props;

    setCurrentRestaurant(restaurant);
    setCurrentDishes(restaurant.dishes);
  }

  // componentWillUnmount() {
  //   const { setCurrentRestaurant, setCurrentDishes } = this.props;

  //   setCurrentRestaurant(null);
  //   setCurrentDishes([]);
  // }

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
    const { dishes } = this.props.currentRestaurant;

    const currentDishes = dishes;
    // const currentDishes = dishes.sort((a, b) => a.price - b.price);
    // const currentDishes = dishes.filter((dish) => dish.price < 10000);
    // const currentDishes = dishes.filter((dish) => dish.category === 'poke');

    const set = filterByCategory(currentDishes, 'set');
    const poke = filterByCategory(currentDishes, 'poke');
    // const roll = filterByCategory(currentDishes, 'roll');
    const tempura = filterByCategory(currentDishes, 'tempura');

    return (
      <div className='restaurant-display'>
        <div className='go-back'>
          <Link to='/'>Z powrotem</Link>
        </div>
        <div className='menu'>
          <div className='menu_filters'>
            <CollectionFilter
              handleClick={this.getValue}
              currentArr={dishes}
              defaultArr={restaurant.dishes}
            />
            <ul>
              <li>Set</li>
              <li>Poke</li>
              <li>Tempura</li>
            </ul>
          </div>
          <div className='menu_dishes'>
            {poke.length > 0 ? (
              <DishGroup
                dishes={poke}
                description={restaurant.categoryDescription.filter(
                  (category) => category.type === 'set'
                )}
              />
            ) : null}
            {set.length > 0 ? (
              <DishGroup
                dishes={set}
                description={restaurant.categoryDescription.filter(
                  (category) => category.type === 'set'
                )}
              />
            ) : null}
            {/* {roll.length > 0 ? <DishGroupRoll dishes={roll} /> : null} */}
            {tempura.length > 0 ? <DishGroup dishes={tempura} /> : null}
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

  setCurrentDishes: (allDishes) => dispatch(setCurrentDishes(allDishes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
