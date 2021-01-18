import axios from "axios";
import { allCountriesURL, countryNameURL } from "../api";

export const loadCountries = () => async (dispatch) => {
  const countriesData = await axios.get(allCountriesURL());
  dispatch({
    type: "FETCH_COUNTRIES",
    payload: {
      countries: countriesData.data,
    },
  });
};

export const fetchSearch = (country_name) => async (dispatch) => {
  const searchCountries = await axios.get(countryNameURL(country_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchCountries.data.results,
    },
  });
};
