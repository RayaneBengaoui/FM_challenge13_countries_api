import axios from "axios";
import { countryNameURL } from "../api";

export const loadDetail = (name) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const countriesData = await axios.get(countryNameURL(name));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      country: countriesData.data[0],
    },
  });
};

export const clearDetail = () => (dispatch) => {
  dispatch({
    type: "CLEAR_DETAIL",
  });
};
