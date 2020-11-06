import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
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
    // register
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registerData: action.payload,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    // login
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        isLoggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    // get request
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
