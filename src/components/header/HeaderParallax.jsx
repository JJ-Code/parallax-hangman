import React, { useEffect } from 'react'
import hollywood from "./hollywood.jpg"
import GameStats from "./GameStats";
import Preloader from "../layouts/Preloader";
import LetterTile from "../layouts/LetterTile";
import { connect } from 'react-redux';
import { getNewWord } from "../../actions/gamePlayAction";
import { v4 as uuid } from 'uuid';



const HeaderParallax = ({ state: { gameWordLength, guessLetters, currentGuess, gameWordLetters, gameWord, wins, losses, guessRemaining }, getNewWord }) => {

  //calling for inital word
  useEffect(() => {
    getNewWord();
    //eslint-disable-next-line
  }, [])


  console.log(currentGuess);

  console.log(gameWord)
  console.log(gameWordLength)

  console.log(`gameWordLetters == ${gameWordLetters}`);


  return (

    <div id="index-banner" className="parallax-container">
      <div className="section no-pad-bot">
        <div className="container">
          <br /><b />


          {/* <h1 className="header center">A lot of Random Fun</h1> */}
          <div className="row center">
            {/* <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5> */}
            {console.log(gameWordLetters)}
            {console.log(guessLetters)}
          </div>

          <div className="row">
            {console.log(wins)}

            <GameStats icon={"people"} title={"Lives Remaining"} gameStats={guessRemaining} />
            <GameStats icon={"mood"} title={"Wins"} gameStats={wins} />
            <GameStats icon={"mood_bad"} title={"Losses"} gameStats={losses} />

          </div>
          <div className="row center" id="word-to-guess">

            {/* if word to guess has not come back load blue loading else word tiles  */}
            {gameWordLetters === null ? (<Preloader />) :
              gameWordLetters.map(letter => (
                /* if the letter is in the letter is in the guessLetters set 
                then the user has guessed the correct letter otherwise return blank*/
                (guessLetters.has(letter)) ?
                  (<LetterTile letter={letter} key={uuid()} />) :
                  (<LetterTile letter={"blank"} key={uuid()} />))
              )}



          </div>

          <br /><br /><br /><br /><br />

          {/* <a href='#add-game-status-message-modal' className='btn-floating red modal-trigger'>
            <i className="material-icons">person_at</i>
          </a> */}

        </div>
      </div>
      <div className="parallax"> <img src={hollywood} alt="Unsplashed background img 1" /> </div>
    </div>
  )
}

const mapStateToProps = state => ({
  state: state.game
});



export default connect(mapStateToProps, { getNewWord })(HeaderParallax);