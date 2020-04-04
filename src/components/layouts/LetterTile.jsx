import React from 'react'



const LetterTile = ({ letter, handleGuess}) => {
  return (<img src={`./images/${letter}-title.jpg`}
    className="letter tiles"
    alt={`letter-${letter}`}
    onClick={handleGuess} 
    letter={letter} />)
}

export default LetterTile; 