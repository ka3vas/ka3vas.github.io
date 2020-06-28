import { combineReducers } from 'redux';

import restaurantReducer from './restaurant/restaurant.reducer';

export default combineReducers({
  currentRestaurant: restaurantReducer,
});
