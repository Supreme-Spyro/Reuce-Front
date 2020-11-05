import {
  GET_USER_DATA_PROFILE,
  GET_USER_DATA_PROFILE_SUCCESS,
  GET_USER_DATA_PROFILE_FAILED,
} from "../actions/getUserData.action";


const initialState = {
  data: [],
  error: null,
  isLoading: false,
};


const getUserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_DATA_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.Users,
      };
    case GET_USER_DATA_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
      default:
          return state
  }
};

export default getUserDataReducer;
