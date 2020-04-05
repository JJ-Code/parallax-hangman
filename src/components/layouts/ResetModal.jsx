import React from 'react';
import { connect } from 'react-redux';
import { resetGame, getNewWord } from '../../actions/gamePlayAction';
import M from 'materialize-css/dist/js/materialize.min.js';




const ResetModal = ({ state: { gameWord }, resetGame, getNewWord }) => {

  const onClose = () => {
    M.toast({ html: `Better luck next time` });
    //reset game
      resetGame();
      getNewWord();
  }
  console.log("I am reset modal");

  return (

    <div>
      <div id='reset-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h5>This game will be reset. </h5>
          <br /><br />
          <h5>The word was <strong>{gameWord}</strong></h5>
          <br /><br /> <br />
        </div>

        <div className='modal-footer'>
          <a href='#!'
            onClick={onClose}
            className='center modal-close waves-effect blue waves-light btn'>
            Close!
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

export default connect(mapStateToProps, { resetGame, getNewWord })(ResetModal);