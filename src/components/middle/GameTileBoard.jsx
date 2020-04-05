import React from 'react'
import LetterTile from '../layouts/LetterTile'
import Button from "../layouts/Button";
import { connect } from 'react-redux';
import { updateGamePlay, checkEndGame, getClue } from "../../actions/gamePlayAction";

const GameTileBoard = ({ state: { gameWordLength, guessLetters, gameWordLetters, gameWord, wins, losses, guessRemaining, endGame }, updateGamePlay, checkEndGame, getClue }) => {

  //shuffling to make ABC tiles random 
  const randomGen = "abcdefghijklmnopqrstuvwxyz".split("").map((a) =>
    ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map((a) => a.value)

  const handleGuess = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.attributes.letter.value)

    //put guess in array guessLetters and update lives remaining
    updateGamePlay(event.currentTarget.attributes.letter.value)
    //check to see if updateGamePlay yield the end of game or not
    checkEndGame();
  }
  const onClickClue = ()=>{
    getClue(gameWord);
  }


  return (
    <div className="container">
      <div className="section">
        <div className="row center">
          <Button onClickClue={onClickClue} linkto={'#clue-message-modal'} classAdded={"modal-trigger"} idName={"get-clue-btn"} name={"Get Clue"} />
          <Button linkto={'#game-status-message-modal'} idName={"reset-btn"} classAdded={"modal-trigger"} name={"Restart Game"} />
        </div>

        <div className="row">
          <div className="col s12 center">
            <h3><i className="mdi-content-send brown-text">
              
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


export default connect(mapStateToProps, { updateGamePlay, checkEndGame, getClue})(GameTileBoard);