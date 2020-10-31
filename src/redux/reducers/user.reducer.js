import {
    REGISTER,
    LOGIN,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,
  } from "../actions/user.action";
  
  const jwtToken = localStorage.getItem("token");
  
  const initialState = jwtToken
    ? {
        isLoggedIn: true,
        data: [],
        isLoading: false,
        error: null,
      }
    : {
        isLoggedIn: false,
        data: [],
        registerData: [],
        isLoading: false,
        error: null,
      };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER:
        return {
          registerData: action.payload,
        };
      case LOGIN:
        return {
          data: action.payload,
          isLoggedIn: true,
        };
      case GET_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.result,
        };
      case GET_DATA_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  