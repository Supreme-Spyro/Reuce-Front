import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
  } from "../actions/checkout.action";
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const showDataOrder = (state = initialState, action) => {
    switch (action.type) {
      case GET_ORDER_REQUEST:
        return {
          ...state,
  
          loading: true,
        };
      case GET_ORDER_SUCCESS:
        return {
          ...state,
  
          loading: false,
          data: action.result
        };
      case GET_ORDER_FAILED:
        return {
          ...state,
  
          loading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
  export default showDataOrder;