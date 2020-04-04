import { GET_NEW_WORD, SET_GUESS_AND_LIVES, SET_END_GAME,  LOGS_ERROR, SET_LOADING, SET_RESET } from "./types";


//get all words from backend
export const getNewWord = () => async dispatch => {
  setLoading();
  console.log("Did I ran");
  try {
    const res = await fetch("./wordBank");
    const data = await res.json();
    const pickWord = data[Math.floor(Math.random() * data.length)]
    const dataReturn = {
      gameWord: pickWord,
      gameWordLetters: pickWord.split(""),
      gameWordLength: pickWord.length
    }
    dispatch({
      type: GET_NEW_WORD,
      payload: dataReturn
    });


  }

  catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err
    })
  }
}




//Put user guesses in new Set which only takes original values 
//check to see if gussed letter is in gameword. If it is -0 lives. If it is not minus 1.
//update how many characters are remaining for end game purposes
export const updateGamePlay = (letter) => {
  return {
    type: SET_GUESS_AND_LIVES,
    payload: letter
  };
}




export const checkEndGame = () => {

  return {
    type: SET_END_GAME
  };
}





// reset game
export const resetGsme = () => {
  checkEndGame();
  return {
    type: SET_RESET
  };
};






// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};