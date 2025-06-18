import './App.css';
import { data } from './data.js';
import Front from './components/front.jsx';
import Back from './components/back.jsx';
import { useState } from 'react';

const App = () => {
  const [flipped, setFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  
  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentCardIndex(randomIndex);
    setFlipped(false); 
  };

  const handlePrevious = () => {
    
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setFlipped(false); 
    }
  };

  
  const isNextDisabled = data.length === 0;
  const isPreviousDisabled = currentCardIndex === 0;


  return (
    <div className="App">
      <div>
        <h2>AI Knowledge Challenge!</h2>
        <h4>Test your understanding of Artificial Intelligence concepts and terms.</h4>
        <h5>Number of cards: {data.length}</h5>
      </div>
      <br />
      <div className={`card-container ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        {/* Check if data exists before trying to access properties */}
        {data.length > 0 ? (
          <>
            <Front content={data[currentCardIndex].Question} />
            <Back content={data[currentCardIndex].Answer} />
          </>
        ) : (
          <p>No cards available.</p> // Fallback if data is empty
        )}
      </div>

      <div className="button-container">
        <button className='button' onClick={handlePrevious} disabled={isPreviousDisabled}>Previous</button>
        <button className='button' onClick={handleNext} disabled={isNextDisabled}>Next</button>
      </div>
    </div>
  );
};

export default App;