import React from 'react';
import { connect } from 'react-redux';
import { updateGamePlay } from '../../actions/gamePlayAction';
import M from 'materialize-css/dist/js/materialize.min.js';




const ClueModal = ({ updateGamePlay }) => {

  const onClose = () => {
    M.toast({ html: `New game has started` });
  }
  console.log("I am modal");




  return (

    <div>
{/* 
      <a href='#add-game-status-message-modal' className='btn-floating red modal-trigger'>
        <i className="material-icons">person_at</i>
      </a> */}


      <div id='clue-message-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h4>This is a clue</h4>
          <br /> <br />
          <h5>HELLO Modal</h5>
          <br /><br />
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

export default connect(mapStateToProps, { updateGamePlay })(ClueModal);