import countriesReducer from "../reducers/countriesReducer";
import countryDetailReducer from "../reducers/countryDetailReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  countries: countriesReducer,
  detail: countryDetailReducer,
});

export default rootReducer;
