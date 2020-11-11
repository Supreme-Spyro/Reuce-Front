import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILED,
  } from "../actions/product.action";
  
  const initialProductState = {
    data: [],
    isLoading: false,
    error: null,
  };
  const getProductReducer = (state = initialProductState, action) => {
    switch (action.type) {
      case GET_PRODUCT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_PRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.result,
        };
      case GET_PRODUCT_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default getProductReducer;
  