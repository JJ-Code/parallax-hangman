import { GET_NEW_WORD, SET_GUESS_AND_LIVES, SET_END_GAME, LOGS_ERROR, SET_LOADING, SET_RESET, GET_CLUE } from "./types";


//get all words from backend
export const getNewWord = () => async dispatch => {
  setLoading();
  console.log("Get new word");
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


//get word definition from
export const getClue = (word) => async dispatch => {

  console.log("Get New Clue");
  try {
    const res = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=84b98cb2-2053-4c97-9062-34a7f5632399`);
    const dataJ = await res.json();


    console.log(res.data[0].shortdef[0]);
    const dataReturn = res.data[0].shortdef[0]
    
    dispatch({
      type: GET_CLUE,
      payload: res.data[0].shortdef[0]
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




// check to see if end game has happened 
export const checkEndGame = () => {
  return {
    type: SET_END_GAME
  };
}




// reset game
export const resetGame = () => {

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



// check to see if end game has happened 
// export const win = () => {
//   return {
//     type: SET_WIN
//   };
// }

// // check to see if end game has happened 
// export const loss = () => {
//   return {
//     type: SET_LOSS
//   };
// }



//     case SET_WIN:
// return {
//   ...state,
//   wins: state.wins + 1,
//   msg: "Congratulations, you have won!"
// };

//     case SET_LOSS:
// return {
//   ...state,
//   losses: state.losses + 1,
//   msg: "Too bad, you have loss!"
// };
