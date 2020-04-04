import { GET_NEW_WORD, SET_GUESS_AND_LIVES, SET_END_GAME,  SET_RESET, LOGS_ERROR, SET_LOADING } from "../actions/types";


const initialState = {
  gameWord: null,
  gameWordLetters: null,
  gameWordLength: null,
  guessLetters: new Set(),
  guessRemaining: 10,
  clue: null,
  wins: 0,
  losses: 0,
  endGame: false,
  error: null,
  loading: false
}


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_WORD:
      //console.log(state);
      return {
        ...state,
        gameWord: action.payload.gameWord,
        gameWordLetters: action.payload.gameWordLetters,
        gameWordLength: action.payload.gameWordLength,
        loading: false

      };

    case SET_GUESS_AND_LIVES:
      return {
        ...state,
        guessLetters: state.guessLetters.add(action.payload),
        guessRemaining: state.guessRemaining - (state.gameWord.includes(action.payload) ? 0 : 1),
        gameWordLength: state.gameWordLength - (state.gameWord.includes(action.payload) ? 1 : 0),

      };
      

    case SET_END_GAME:
      return {
        ...state,
        endGame: ((state.guessRemaining <= 0) || (state.gameWordLength === 1)) ? true : false, 
        wins: (state.gameWordLength === 0) ? (state.wins + 1 ): state.wins,
        losses: (state.guessRemaining === 0) ? (state.losses + 1) : state.losses
      };


      
    case SET_RESET:
      return {
        ...state,
        gameWord: null,
        gameWordLetters: null,
        gameWordLength: null,
        guessLetters: new Set(),
        guessRemaining: 10,
        clue: null,
        endGame: false,
        error: null,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;

  }

};

