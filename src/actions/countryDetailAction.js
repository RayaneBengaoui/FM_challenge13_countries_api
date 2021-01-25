import axios from "axios";
import { countryNameURL } from "../api";

export const loadDetail = (name) => async (dispatch) => {
  const countriesData = await axios.get(countryNameURL(name));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      country: countriesData.data[0],
    },
  });
};
