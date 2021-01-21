import axios from "axios";
import { allCountriesURL } from "../api";

export const loadCountries = () => async (dispatch) => {
  const countriesData = await axios.get(allCountriesURL());
  dispatch({
    type: "FETCH_COUNTRIES",
    payload: {
      countries: countriesData.data,
    },
  });
};

export const fetchSearch = (search_countries) => (dispatch) => {
  // const searchCountries = await axios.get(countryNameURL(country_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: search_countries,
    },
  });
};
