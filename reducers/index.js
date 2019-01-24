import { combineReducers } from "redux";
import photoReducer from "./photoReducer";
import themeReducer from "./themeReducer";
import sceneReducer from "./sceneReducer";
export default combineReducers({
  photos: photoReducer,
  theme: themeReducer,
  scenes: sceneReducer
});
