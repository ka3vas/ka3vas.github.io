import React from 'react';

import Navigation from './components/navigation/navigation.component';
import CardList from './components/card-list/card-list.component';
import Footer from './components/footer/footer.component';
import video from './assets/video/hero-video.MP4';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='hero'>
        <div>
          <CardList />
        </div>
        <video className='video-bg' autoPlay muted loop>
          <source src={video} />
        </video>
      </div>
      <Navigation />
      <div className='pusher'></div>
      <Footer />
    </div>
  );
}

export default App;
