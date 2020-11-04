import {
    GET_SEARCH_REQUEST,
    GET_SEARCH_SUCCESS,
    GET_SEARCH_FAILED,
  } from "../actions/search.action";
  
  const initialState = {
    data: [],
    error: null,
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SEARCH_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_SEARCH_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.result,
        };
      case GET_SEARCH_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  