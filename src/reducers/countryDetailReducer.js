const initialState = {
  country: {},
};

const countryDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        country: action.payload.country,
      };
    default:
      return { ...state };
  }
};

export default countryDetailReducer;
