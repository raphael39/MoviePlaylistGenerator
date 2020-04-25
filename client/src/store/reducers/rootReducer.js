import authReducer from "./authReducer";
import playlistReducer from "./playlistReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  playlist: playlistReducer
})

export default rootReducer
