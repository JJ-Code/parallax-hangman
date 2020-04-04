import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { updateGamePlay } from '../../actions/gamePlayAction';
import M from 'materialize-css/dist/js/materialize.min.js';




const MessageModal = ({ updateGamePlay }) => {

  const onClose = () => {
    M.toast({ html: `New game has started` });
  }
console.log("I am modal");




  return (
    <div id='game-status-message-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>The Game Has Ended</h4>
        <br /> <br />
        <h5>Goodbye Modal</h5>
        <br /><br />
      </div>

      <div className='modal-footer'>
        <a href='#!'
          onClick={onClose}
          className='center modal-close waves-effect blue waves-light btn'>
          Play Again!
        </a>
      </div>
    </div>
  );
};




const modalStyle = {
  width: '45%',
  height: '45%'
};

export default connect(null, { updateGamePlay })(MessageModal);