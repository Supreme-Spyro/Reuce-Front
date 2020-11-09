import {
  GET_ARTICLE_DATA,
  GET_ARTICLE_DATA_SUCCESS,
  GET_ARTICLE_DATA_FAILED,

} from "../actions/article.action";

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

const articleDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLE_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ARTICLE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_ARTICLE_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default articleDataReducer;
