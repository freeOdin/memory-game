import { useState } from 'react';
import { FaGithub, FaReact, FaPython, FaNode, FaDatabase, FaCode } from 'react-icons/fa';
import { DiJavascript, DiCss3, DiHtml5 } from 'react-icons/di';
import { SiVite, SiRedux, SiTypescript } from 'react-icons/si';
import Card from './Card';

const Game = () => {
  const [isHardMode, setIsHardMode] = useState(false);
  
  const getCardIcons = (hardMode) => [
    { id: 1, icon: <FaGithub size={50} color={hardMode ? "#000000" : "#333333"} /> },
    { id: 2, icon: <FaReact size={50} color={hardMode ? "#000000" : "#61DAFB"} /> },
    { id: 3, icon: <FaPython size={50} color={hardMode ? "#000000" : "#3776AB"} /> },
    { id: 4, icon: <DiJavascript size={50} color={hardMode ? "#000000" : "#F7DF1E"} /> },
    { id: 5, icon: <DiCss3 size={50} color={hardMode ? "#000000" : "#1572B6"} /> },
    { id: 6, icon: <DiHtml5 size={50} color={hardMode ? "#000000" : "#E34F26"} /> },
    { id: 7, icon: <FaNode size={50} color={hardMode ? "#000000" : "#339933"} /> },
    { id: 8, icon: <FaDatabase size={50} color={hardMode ? "#000000" : "#47A248"} /> },
    { id: 9, icon: <SiVite size={50} color={hardMode ? "#000000" : "#646CFF"} /> },
    { id: 10, icon: <SiRedux size={50} color={hardMode ? "#000000" : "#764ABC"} /> },
    { id: 11, icon: <FaCode size={50} color={hardMode ? "#000000" : "#FF4785"} /> },
    { id: 12, icon: <SiTypescript size={50} color={hardMode ? "#000000" : "#3178C6"} /> }
  ];

  const [cards, setCards] = useState(getCardIcons(false));
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const toggleDifficulty = () => {
    const newMode = !isHardMode;
    setIsHardMode(newMode);
    setCards(getCardIcons(newMode));
    setCurrentScore(0);
    setClickedCards([]);
  };

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      setClickedCards([...clickedCards, id]);
      const shuffled = [...getCardIcons(isHardMode)].sort(() => Math.random() - 0.5);
      setCards(shuffled);
    }
  };

  return (
    <div className="game-container">
      <div className="score-board">
        <div className="difficulty-toggle">
          <button 
            className={`mode-button ${!isHardMode ? 'active' : ''}`}
            onClick={toggleDifficulty}
          >
            {isHardMode ? 'Switch to Easy' : 'Switch to Hard'}
          </button>
          <p className="mode-indicator">
            Current Mode: {isHardMode ? 'Hard' : 'Easy'}
          </p>
        </div>
        <div className="scores">
          <h2>Current Score: {currentScore}</h2>
          <h2>Best Score: {bestScore}</h2>
        </div>
      </div>
      <div className="cards-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
