import React from 'react';

import video from './assets/video/hero-video.MP4';
import swiecieImg from './assets/images/swiecie.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='hero'>
        <div>
          <div className='cards-display'>
            <div className='card'>
              <div className='card__image'>
                <img
                  width='300'
                  height='300'
                  src={swiecieImg}
                  alt='urocza japonka podająca sushi'
                />
              </div>
              <div className='card__title'>Świecie</div>
              <a href='#' className='card__phone btn'>
                (+48) 799 799 875
              </a>
              <div className='card__open'>Otwarte</div>
            </div>
          </div>
        </div>
        <video className='video-bg' autoPlay muted loop>
          <source src={video} />
        </video>
      </div>
    </div>
  );
}

export default App;
