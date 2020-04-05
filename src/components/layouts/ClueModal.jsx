import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';




const ClueModal = ({ state: { clue } }) => {

  const onClose = () => {
    M.toast({ html: `Good luck!` });
  }
  console.log("I am clue modal");

  let def;
  let phrase;

  if (clue !== null) {
    def = clue.def
    phrase = clue.phrase;

  }

  return (

    <div>
      {/* 
      <a href='#add-game-status-message-modal' className='btn-floating red modal-trigger'>
        <i className="material-icons">person_at</i>
      </a> */}




      <div id='clue-message-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
    
          {console.log(clue)}
          <h5><strong>Phrase:</strong> {phrase}</h5>
          <br /><br /> 
          <h5><strong>Definition:</strong> {def}</h5>
          <br /><br /> <br />
        </div>

        <div className='modal-footer'>
          <a href='#!'
            onClick={onClose}
            className='center modal-close waves-effect blue waves-light btn'>
            Contiue!
        </a>
        </div>
      </div>


    </div>
  );
};

const mapStateToProps = state => ({
  state: state.game
});




const modalStyle = {
  width: '45%',
  height: '45%'
};

export default connect(mapStateToProps)(ClueModal);