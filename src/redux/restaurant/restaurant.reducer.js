const INITIAL_STATE = {
  restaurant: null,
  currentDishes: [],
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_RESTAURANT':
      return {
        ...state,
        restaurant: action.payload,
      };

    case 'SET_CURRENT_DISHES':
      return {
        ...state,
        currentDishes: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
