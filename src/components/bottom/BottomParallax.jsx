import React from 'react';
import movieMaking from "./movieMaking.jpg";

const BottomParallax = () => {
  return (
    <div className="parallax-container valign-wrapper">
      <div className="section no-pad-bot">
        <div className="container">
          <div className="row center">
            <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
          </div>
        </div>
      </div>
      <div className="parallax"><img src={movieMaking} alt="Film Making" /></div>
      </div>
  )
}

export default BottomParallax; 