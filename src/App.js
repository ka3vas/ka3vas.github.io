import React from 'react';

import Header from './components/header/header.component';
import Navigation from './components/navigation/navigation.component';
import Footer from './components/footer/footer.component';

import './App.scss';

import video from './assets/video/hero-video.MP4';
import restaurants from './assets/data/restaurants';
// import dishes from './assets/data/dishes';

function App() {
  return (
    <div className='App'>
      <Header video={video} restaurants={restaurants} />
      <Navigation />
      <main>
        <div className='pusher'></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
