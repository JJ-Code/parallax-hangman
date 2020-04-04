import React, { useRef, useEffect } from 'react'
import LetterTile from '../layouts/LetterTile'
import Button from "../layouts/Button";
import { connect } from 'react-redux';
import { updateGamePlay, checkEndGame } from "../../actions/gamePlayAction";

const GameTileBoard = ({ state: { gameWordLength, guessLetters, gameWordLetters, gameWord, wins, losses, guessRemaining }, updateGamePlay, checkEndGame }) => {

  //shuffling to make ABC tiles random 
  const randomGen = "abcdefghijklmnopqrstuvwxyz".split("").map((a) =>
    ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map((a) => a.value)


  const prevWinsRef = useRef();
  useEffect(() => {
    prevWinsRef.current = wins;
  });

  const prevWins = prevWinsRef.current;


  const handleGuess = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.attributes.letter.value)

    //put guess in array guessLetters and update lives remaining
    updateGamePlay(event.currentTarget.attributes.letter.value)
    //check to see if updateGamePlay yield the end of game or not
    checkEndGame();
  }

  console.log(`Current state: ${wins}`);
  console.log(`Pre state: ${prevWins}`);


  return (
    <div className="container">
      <div className="section">

        <div className="row">
          <div className="col s12 center">
            <h3><i className="mdi-content-send brown-text">
              <Button name={"Get Clue"} />

              <div id="abc-tiles" > <h2 className="gameState">
                {randomGen.map(letter => (
                  <LetterTile handleGuess={handleGuess} key={letter} letter={letter} />
                ))}

              </h2></div>
            </i></h3>
          </div>
        </div>

      </div>
    </div>
  )
}



const mapStateToProps = state => ({
  state: state.game
});


export default connect(mapStateToProps, { updateGamePlay, checkEndGame })(GameTileBoard);