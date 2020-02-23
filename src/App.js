import React from 'react';

import CardList from './components/card-list/card-list.component.jsx';
import video from './assets/video/hero-video.MP4';

// import restaurant from './assets/data/restaurants';

import './App.css';

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
    </div>
  );
}

export default App;
