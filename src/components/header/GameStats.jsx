import React from 'react';


const GameStats = ({ icon, title, gameStats}) => {

  return (
    
    <div className="col s12 m4">
      <div className="icon-block">

        <h2 className="center white-text"><i className="material-icons">{icon}</i></h2>
        <h5 className="center bold">{title}: {gameStats} </h5>

      </div>
    </div>
  )
}



export default GameStats;
