import { combineReducers } from "redux";
import photoReducer from "./photoReducer";
import themeReducer from "./themeReducer";
export default combineReducers({
  photos: photoReducer,
  theme: themeReducer
});
