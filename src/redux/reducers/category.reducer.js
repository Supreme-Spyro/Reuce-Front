import {
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILED,
  } from "../actions/category.action.js";
  
  const initialProductState = {
    data: [],
    isLoading: false,
    error: null,
  };
  const getCategoryReducer = (state = initialProductState, action) => {
    switch (action.type) {
      case GET_CATEGORY_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_CATEGORY_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.result,
        };
      case GET_CATEGORY_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default getCategoryReducer;