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
    if (currentCardIndex < data.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setFlipped(false); 
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setFlipped(false); 
    }
  };

  return (
    <div className="App">
      <div>
        <h2>AI Knowledge Challenge!</h2>
        <h4>Test your understanding of Artificial Intelligence concepts and terms.</h4>
        <h5>Number of cards: {data.length}</h5>
      </div>
      <br />
      <div className={`card-container ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <Front content={data.length > 0 ? data.at(currentCardIndex)?.Question : 'No cards'} />
        <Back content={data.length > 0 ? data.at(currentCardIndex)?.Answer : 'No answer'} />
      </div>

      <div className="button-container">
        <button className='button' onClick={handlePrevious} disabled={currentCardIndex === 0}>Previous</button>
        <button className='button' onClick={handleNext} disabled={currentCardIndex === data.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default App;