import axios from "axios";
export const GET_CATEGORY_REQUEST = "GET_SEARCH_REQUEST";
export const GET_CATEGORY_SUCCESS = "GET_SEARCH_SUCCESS";
export const GET_CATEGORY_FAILED = "GET_SEARCH_FAILED";

export const getCategoryRequest = () => {
  return {
    type: GET_CATEGORY_REQUEST,
  };
};

export const getCategorySuccess = (result) => {
  return {
    type: GET_CATEGORY_SUCCESS,
    result,
  };
};

export const getCategoryFailed = (error) => {
  return {
    type: GET_CATEGORY_FAILED,
    error,
  };
};

export const getCategoryActions = (id, event, history) => {
  event.preventDefault();
  return async (dispatch) => {
    dispatch(getCategoryRequest(id));
    console.log("categoryId", id);
    const urlCategory = "https://reuce-back.herokuapp.com/category";
    const response = await axios.get(`${urlCategory}/${id.name}`);
    console.log("response", response.data.Products);
    dispatch(getCategorySuccess(response.data.Products));
    history.push(`/search/${id.name}`);
    // window.location.href = `search/${id}`;
  };
};
