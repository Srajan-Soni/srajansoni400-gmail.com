import React, { useState } from 'react';
import AlphabetComponent from './AlphabetComponent';
import PhoneScreen from './GameScreen';
import './App.css'; 

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAlphabetClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const alphabets = [
    { letter: 'A', gifSrc: '/gifs/apple.gif' },
    { letter: 'B', gifSrc: '/gifs/bee.gif' },
    { letter: 'C', gifSrc: '/gifs/coin.gif' },
    { letter: 'D', gifSrc: '/gifs/duck.gif' },
    { letter: 'E', gifSrc: '/gifs/eye.gif' },
    { letter: 'F', gifSrc: '/gifs/food-truck.gif' },
    { letter: 'G', gifSrc: '/gifs/gift.gif' },
    { letter: 'H', gifSrc: '/gifs/home.gif' },
    
  ];

  return(
    <div className="App">
      <header className="App-header">

      </header>
      <main className="phone">
        <div className='phonescreen' >
           <PhoneScreen selectedImage={selectedImage} />
        </div>
       
        <div className="alphabet-keyboard" style={{backgroundColor : 'grey'}}>
          {alphabets.map((alphabet, index) => (
            <AlphabetComponent
              key={index} 
              letter={alphabet.letter} 
              gifSrc={alphabet.gifSrc} 
              handleClick={handleAlphabetClick}

            />
          ))}
        </div>
      </main>
      <footer>
        <p>Created by Srajan Soni</p>
      </footer>
    </div>
  );
};

export default App;
