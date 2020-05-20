import React, { Component } from 'react';

import Header from './components/header/header.component';
import Navigation from './components/navigation/navigation.component';
import DishGroup from './components/dish-group/dish-group.component';
import Footer from './components/footer/footer.component';

import './App.scss';

import video from './assets/video/hero-video.MP4';
import restaurants from './assets/data/restaurants';
import dishes from './assets/data/dishes';

import set from './assets/data/dishes/set';

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

    console.log('test', dishes);

    return (
      <div className='App' style={{ backgroundColor: '#f7fbfb' }}>
        {width > 767 ? (
          <>
            <Header video={video} restaurants={restaurants} />
            <Navigation />
          </>
        ) : null}
        <main className='container'>
          <DishGroup key={set.title} dishSet={set} />
          {/* {dishes.map((dishSet) => (
            <DishGroup key={dishSet.title} dishSet={dishSet} />
          ))} */}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
