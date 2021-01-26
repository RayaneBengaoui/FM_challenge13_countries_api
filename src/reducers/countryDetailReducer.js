const initialState = {
  country: {},
  isLoading: true,
};

const countryDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        country: action.payload.country,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    case "CLEAR_DETAIL":
      return {
        ...state,
        country: {},
      };
    default:
      return { ...state };
  }
};

export default countryDetailReducer;
