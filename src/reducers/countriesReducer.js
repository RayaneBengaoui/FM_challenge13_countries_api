const initState = {
  countries: [],
  searched: [],
};

const countriesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return {
        ...state,
        countries: action.payload.countries,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default countriesReducer;
