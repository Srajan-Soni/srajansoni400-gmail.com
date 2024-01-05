import React from 'react';
import './GameScreen.css'; 

const GameScreen = ({ selectedImage }) => {
  return (
    <div className="phone-screen">
      {selectedImage ? (
        <img src={selectedImage} alt="Selected" />
      ) : (
        <p>Select an alphabet to display its image</p>
      )}
    </div>
  );
};

export default GameScreen;
