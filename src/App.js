import React, { Component } from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import MobileNavigation from './components/mobile-navigation/mobile-navigation.component';
import Navigation from './components/navigation/navigation.component';
import RestauranPicker from './components/restaurant-picker/restaurant-picker.component';
import Restaurant from './components/restaurant/restaurant.component';
import Footer from './components/footer/footer.component';

import Catering from './pages/catering/catering.page';
import ContactUs from './pages/contactus/contactus.page';

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

    const { restaurant } = this.props.currentRestaurant;

    return (
      <HashRouter basename='/'>
        <div className='App'>
          {width > 767 ? (
            <>
              <div className='blinder'></div>
              <Navigation />
            </>
          ) : (
            <MobileNavigation />
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
            <Route path='/catering' render={(props) => <Catering {...props} />}>
              {!this.props.currentRestaurant.restaurant ? (
                <Redirect to='/' />
              ) : null}
            </Route>
            <Route
              path='/contactus'
              render={(props) => <ContactUs {...props} />}
            >
              {!this.props.currentRestaurant.restaurant ? (
                <Redirect to='/' />
              ) : null}
            </Route>
            <Route
              path='/'
              render={(props) => (
                <>
                  {width > 767 ? <Header {...props} video={video} /> : null}
                  <RestauranPicker {...props} restaurants={restaurants} />
                </>
              )}
            />
          </Switch>
          <Footer restaurants={restaurants} />
        </div>
      </HashRouter>
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
