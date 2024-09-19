// App.js
import React, { useState } from 'react';
import Reel from './Reel';
import './index.css';

function App() {
  const [images, setImages] = useState([
    '/images/design1.png',
    '/images/design2.png',
    '/images/design3.png',
    '/images/design4.png',
    '/images/design5.png',
    '/images/design6.png',
    '/images/design7.png',
    '/images/design8.png',
    '/images/design9.png',
  ]);

  const [reelImages, setReelImages] = useState(['', '', '']);
  const [spinning, setSpinning] = useState([false, false, false]);
  const [userInput, setUserInput] = useState({
    color: '',
    size: '',
  });

  const handleSpin = () => {
    setSpinning([true, true, true]);

    setTimeout(() => {
      const newReelImages = [
        images[Math.floor(Math.random() * images.length)],
        images[Math.floor(Math.random() * images.length)],
        images[Math.floor(Math.random() * images.length)],
      ];
      setReelImages(newReelImages);
      setSpinning([false, false, false]);
    }, 2000);
  };

  const handleInputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <h1>T-Shirt Design Slot Machine</h1>

      <div className="user-inputs">
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={userInput.color}
            onChange={handleInputChange}
            placeholder="e.g., Red"
          />
        </label>
        <label>
          Size:
          <input
            type="text"
            name="size"
            value={userInput.size}
            onChange={handleInputChange}
            placeholder="e.g., M"
          />
        </label>
      </div>

      <div className="slot-machine">
        <Reel image={reelImages[0]} spinning={spinning[0]} />
        <Reel image={reelImages[1]} spinning={spinning[1]} />
        <Reel image={reelImages[2]} spinning={spinning[2]} />
      </div>

      <div className="spin-button">
        <button onClick={handleSpin}>Spin</button>
      </div>

      {reelImages.every((img) => img !== '') && !spinning.includes(true) && (
        <div className="result">
          <h2>Your Selected Design:</h2>
          <img src={reelImages[1]} alt="Selected T-Shirt Design" />
          <p>
            Color: {userInput.color || 'N/A'}, Size: {userInput.size || 'N/A'}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
