import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Navigation from './components/navigation/navigation.component';
import RestauranPicker from './components/restaurant-picker/restaurant-picker.component';
import Restaurant from './components/restaurant/restaurant.component';
import Footer from './components/footer/footer.component';

import Catering from './pages/catering/catering.component';

import restaurants from './assets/data/restaurants';
// import restaurants from './assets/data/restaurants.json';

import './App.scss';

import video from './assets/video/hero-video.MP4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      app: {
        width: 0,
      },
    };
  }

  componentDidMount() {
    this.setState({ app: { width: window.innerWidth } });

    window.addEventListener('resize', () =>
      this.setState({ app: { width: window.innerWidth } })
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  render() {
    const { width } = this.state.app;

    return (
      <div className='App' style={{ backgroundColor: '#f7fbfb' }}>
        {width > 767 ? (
          <>
            <Header video={video} />
            <Navigation />
          </>
        ) : (
          <div>Mobile Header with mobile navigation</div>
        )}
        <Switch>
          {restaurants.map((restaurant) => (
            <Route
              key={restaurant.id}
              exact
              path={`/${restaurant.url}`}
              render={(props) => (
                <Restaurant {...props} restaurant={restaurant} />
              )}
            />
          ))}
          <Route exact path='/catering' component={Catering} />
          <Route
            path='/'
            render={(props) => (
              <RestauranPicker {...props} restaurants={restaurants} />
            )}
          />
        </Switch>
        <Footer restaurants={restaurants} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentRestaurant: state.currentRestaurant,
});

// const mapDispatchToProps = dispatch => ({
//   setCurrentRestaurant: restaurant => dispatch(setCurrentRestaurant(restaurant))
// });

export default connect(mapStateToProps)(App);
// export default App;
