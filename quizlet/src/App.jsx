import './App.css';
import { data } from './data.js';
import Front from './components/front.jsx';
import Back from './components/back.jsx';
import { useState } from 'react';

const App = () => {
  const [flipped, setFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isCorrectGuess, setIsCorrectGuess] = useState(null); 
  const resetGuessState = () => {
    setUserGuess('');
    setFeedbackMessage('');
    setIsCorrectGuess(null);
  };

  const handleFlip = () => {
    
    resetGuessState();
    if (isCorrectGuess === null || isCurrentAnswerImage) {
      setFlipped(!flipped);
    } else if (!isCorrectGuess) { 
        setFlipped(!flipped);
    }
  };

  const handleNext = () => {
    if (currentCardIndex < data.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setFlipped(false); 
      resetGuessState(); 
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setFlipped(false); 
      resetGuessState();
    }
  };

  
  const normalizeString = (str) => {
    if (typeof str !== 'string') return ''; 
    return str
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '') 
      .replace(/\s+/g, ' ') 
      .trim();}
      

  const handleSubmitGuess = () => {
    const currentAnswer = data[currentCardIndex].Answer;

    // Check if the current answer is an image object
    if (typeof currentAnswer === 'object' && currentAnswer !== null && 'src' in currentAnswer) {
      setFeedbackMessage('This card has an image answer, guessing is not applicable.');
      setIsCorrectGuess(false); // Indicate not a text answer
      return;
    }

    const normalizedUserGuess = normalizeString(userGuess);
    const normalizedCorrectAnswer = normalizeString(currentAnswer);

    if (normalizedUserGuess === normalizedCorrectAnswer) {
      setFeedbackMessage('Correct!');
      setIsCorrectGuess(true);
      setFlipped(true); // Automatically flip on correct guess
    } else {
      setFeedbackMessage('Try again!');
      setIsCorrectGuess(false);
    }
  };

  const isNextDisabled = data.length === 0 || currentCardIndex === data.length - 1;
  const isPreviousDisabled = currentCardIndex === 0;

  // Check if the current card's answer is an image
  const isCurrentAnswerImage = typeof data[currentCardIndex]?.Answer === 'object' && data[currentCardIndex]?.Answer !== null && 'src' in data[currentCardIndex]?.Answer;


  return (
    <>
      <div className="App">
        <div>
          <h2>AI Knowledge Challenge!</h2>
          <h4>Test your understanding of Artificial Intelligence concepts and terms.</h4>
          <h5>Number of cards: {data.length}</h5>
          <h5>Current Card: {currentCardIndex + 1} / {data.length}</h5>
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

        {!flipped && !isCurrentAnswerImage && data.length > 0 && ( // Show guess input only when not flipped and answer is not image
          <div className="guess-section">
            <input
              type="text"
              placeholder="Enter your guess"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              className="guess-input"
            />
            <button onClick={handleSubmitGuess} className="button submit-button">
              Submit Guess
            </button>
            {feedbackMessage && (
              <p className={`feedback-message ${isCorrectGuess ? 'correct' : 'incorrect'}`}>
                {feedbackMessage}
              </p>
            )}
          </div>
        )}

        {isCurrentAnswerImage && !flipped && data.length > 0 && (
          <p className="image-answer-note">Flip the card to see the image answer!</p>
        )}


        <div className="button-container">
          <button className='button' onClick={handlePrevious} disabled={isPreviousDisabled}>Previous</button>
          <button className='button' onClick={handleNext} disabled={isNextDisabled}>Next</button>
        </div>
      </div>
    </>
  );
};

export default App;
