// Reel.js
import React from 'react';

function Reel({ image, spinning }) {
  return (
    <div className={`reel ${spinning ? 'spinning' : ''}`}>
      {image && <img src={image} alt="T-Shirt Design" />}
    </div>
  );
}

export default Reel;
