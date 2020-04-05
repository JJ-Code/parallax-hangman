import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { getNewWord, resetGame } from "../../actions/gamePlayAction";

const GameStats = ({ icon, title, gameStats, resetGame, getNewWord }) => {
  //previous prop reference   
  const prevGameStatsRef = useRef();
  useEffect(() => {
    prevGameStatsRef.current = gameStats;
  });

  const prevGameStats = prevGameStatsRef.current;
  ;

  useEffect(() => {
    gameEnded();

    //eslint-disable-next-line
  }, [gameStats])

  const gameEnded = () => {
    if (title !== "Lives Remaining" && ((gameStats - prevGameStats) === 1)) {
      console.log(icon, title, gameStats);
      // console.log(`I am curret gameStat ${gameStats}`);
      // console.log(`I am curret prevGameStats ${prevGameStats}`);
      // return (<a href='#add-game-status-message-modal' className='btn-floating red modal-trigger'>
      //   <i className="material-icons">person_at</i>
      // </a>)
      (title === "Wins") ? alert("Congrats, you have WON!") : alert("BOO, you have LOSS!")

      resetGame();
      getNewWord();
      

    }

  }



  return (

    <div className="col s12 m4">
      <div className="icon-block">

        <h2 className="center white-text"><i className="material-icons">{icon}</i></h2>
        <h5 className="center bold">{title}: {gameStats} </h5>


      </div>
    </div>
  )
}


export default connect(null, { resetGame, getNewWord })(GameStats);

