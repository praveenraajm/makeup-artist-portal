import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { portfolioGallery } from "./portfolioGallery";

const rootReducer = combineReducers({
  form,
  portfolioGallery,
});

export default rootReducer;
