import { combineReducers } from "redux";
import activitiesReducer from "./activitiesReducer";

const rootReducers = combineReducers({
  activities: activitiesReducer,
});

export default rootReducers;
