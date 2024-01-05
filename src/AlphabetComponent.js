import React from 'react';
import './AlphabetComponent.css'; 

const AlphabetComponent = ({ letter, gifSrc, handleClick }) => {

    const multicolor = '#' + Math.floor(Math.random()*16777215).toString(16);
    const playClickSound = (letter) => {
      console.log(letter);
      const audio = new Audio(`${getSoundFile(letter)}`);
      audio.play();
    };
  
    const getSoundFile = (letter) => {
   
      const soundMap = {
        A: '/sounds/_apple.mp3',
        B: '/sounds/_bee.mp3',
        C: '/sounds/_coin.mp3',
        D: '/sounds/_duck.mp3',
        E: '/sounds/_eye.mp3',
        F: '/sounds/_foodtruck.mp3',
        G: '/sounds/_gift.mp3',
        H: '/sounds/_home.mp3',

      };
  
      return soundMap[letter]  
    };

  return (
    <div className="alphabet-container" style={{backgroundColor : multicolor}} onClick={() => {handleClick(gifSrc); playClickSound(letter)}  }>
      <h2>{letter}</h2>
    
    </div>
  );
};

export default AlphabetComponent;
