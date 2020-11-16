import axios from "axios";
export const GET_SEARCH_REQUEST = "GET_SEARCH_REQUEST";
export const GET_SEARCH_SUCCESS = "GET_SEARCH_SUCCESS";
export const GET_SEARCH_FAILED = "GET_SEARCH_FAILED";

export const getSearchRequest = () => {
  return {
    type: GET_SEARCH_REQUEST,
  };
};

export const getSearchSuccess = (result) => {
  return {
    type: GET_SEARCH_SUCCESS,
    result,
  };
};

export const getSearchFailed = (error) => {
  return {
    type: GET_SEARCH_FAILED,
    error,
  };
};

export const getSearchActions = (id, event, history) => {
  // event.preventDefault();
  // console.log("hasil event", event)
  return async (dispatch) => {
    dispatch(getSearchRequest(id));
    // console.log("searchId", id);
    const urlSearch = "https://reuce-back.herokuapp.com/product/search";
    const response = await axios.get(`${urlSearch}/${id}`);
    // console.log("response", response.data.Products);
    dispatch(getSearchSuccess(response.data.Products));
    // history.push(`/search/${id.name}`);
  };
};
