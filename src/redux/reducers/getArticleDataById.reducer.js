import {
    GET_ARTICLE_DATA_BY_ID,
    GET_ARTICLE_DATA_BY_ID_SUCCESS,
    GET_ARTICLE_DATA_BY_ID_FAILED,
} from '../actions/getArticleDataById.action'



const initialState = {
    data: [],
    error: null,
    isLoading: false};
  

const articleDataByIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ARTICLE_DATA_BY_ID:
        return {
          ...state,
          isLoading: true,
        };
      case GET_ARTICLE_DATA_BY_ID_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case GET_ARTICLE_DATA_BY_ID_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default articleDataByIdReducer;