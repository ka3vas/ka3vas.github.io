import React, { Component } from 'react';

import './collection-filters.styles.scss';

class CollectionFilter extends Component {
  filterAZ = (array, returnFunction) => {
    const sortedItems = array.map((item) => {
      const sortedDishes = item.dishes.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        else return 0;
      });

      const sortedItem = { ...item, dishes: sortedDishes };

      return sortedItem;
    });

    returnFunction(sortedItems);
  };

  filterZA = (array, returnFunction) => {
    const sortedItems = array.map((item) => {
      const sortedDishes = item.dishes.sort((a, b) => {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        else return 0;
      });

      const sortedItem = { ...item, dishes: sortedDishes };

      return sortedItem;
    });

    returnFunction(sortedItems);
  };

  filterByPriceUp = (array, returnFunction) => {
    const sortedItems = array.map((item) => {
      const sortedDishes = item.dishes.sort((a, b) => a.price - b.price);

      const sortedItem = { ...item, dishes: sortedDishes };

      return sortedItem;
    });

    returnFunction(sortedItems);
  };

  filterByPriceDown = (array, returnFunction) => {
    const sortedItems = array.map((item) => {
      const sortedDishes = item.dishes.sort((a, b) => b.price - a.price);

      const sortedItem = { ...item, dishes: sortedDishes };

      return sortedItem;
    });

    returnFunction(sortedItems);
  };

  render() {
    // currentArr,
    const { currentArr, handleClick } = this.props;
    return (
      <div className='menu-filters'>
        <ul className='category'>
          <li>
            <div>Alfabetycznie:</div>
            <ul className='subcategory'>
              <li>
                <button onClick={() => this.filterAZ(currentArr, handleClick)}>
                  A-Z
                </button>
              </li>
              <li>
                <button onClick={() => this.filterZA(currentArr, handleClick)}>
                  Z-A
                </button>
              </li>
            </ul>
          </li>
          <li>
            <div>Cena:</div>
            <ul className='subcategory'>
              <li>
                <button
                  onClick={() => this.filterByPriceUp(currentArr, handleClick)}
                >
                  Rosnąco
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    this.filterByPriceDown(currentArr, handleClick)
                  }
                >
                  Malejąco
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default CollectionFilter;
