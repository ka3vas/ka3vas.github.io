import React, { Component } from 'react';

import './collection-filters.styles.scss';

class CollectionFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilters: [],
    };
  }

  filterAZ = (array, returnFunction) => {
    const sortedArray = array.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      else return 0;
    });

    returnFunction(sortedArray);
  };

  filterZA = (array, returnFunction) => {
    const sortedArray = array.sort((a, b) => {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      else return 0;
    });

    returnFunction(sortedArray);
  };

  filterByPriceUp = (array, returnFunction) => {
    const sortedArray = array.sort((a, b) => a.price - b.price);
    returnFunction(sortedArray);
  };

  filterByPriceDown = (array, returnFunction) => {
    const sortedArray = array.sort((a, b) => b.price - a.price);
    returnFunction(sortedArray);
  };

  // filterByPriceFrom = (currentArr, returnFunction, priceFrom) => {
  //   const priceValue = priceFrom * 100;
  //   const sortedArray = currentArr.filter((item) => item.price > priceValue);
  //   returnFunction(sortedArray);
  // };

  // filterByPriceTo = (currentArr, returnFunction, priceFrom) => {
  //   const priceValue = priceFrom * 100;
  //   const sortedArray = currentArr.filter((item) => item.price < priceValue);
  //   returnFunction(sortedArray);
  // };

  render() {
    // currentArr,
    const { defaultArr, currentArr, handleClick } = this.props;
    console.log('defaultArr', defaultArr);
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
          {/* <li>
            <span>Kategoria</span>
            <ul>
              <li>
                <input
                  type='checkbox'
                  onChange={(e) =>
                    this.updateActiveFilters(e.target.checked, 'poke')
                  }
                />
              </li>
              <li>
                <input type='checkbox' />
              </li>
              <li>
                <input type='checkbox' />
              </li>
              <li>
                <input type='checkbox' />
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default CollectionFilter;
