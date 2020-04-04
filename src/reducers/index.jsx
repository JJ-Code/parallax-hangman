import { combineReducers } from "redux";
import gameReducer from './gamePlayReducer';



export default combineReducers({
  game: gameReducer
});