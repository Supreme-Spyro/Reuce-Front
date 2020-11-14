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

export const getAllCategory = () => (dispatch) => {
    dispatch(getCategoryRequest);
    const urlCategory = "https://reuce-back.herokuapp.com/category";
    axios
      .get(`${urlCategory}`)
      .then((result) => dispatch(getCategorySuccess(result.data)))
      .catch((error) => dispatch(getCategoryFailed(error)));
  };

export const getCategoryId = (id) => (dispatch) => {
  dispatch(getCategoryRequest)
  const urlCategory = "https://reuce-back.herokuapp.com/category";
  axios
    .get(`${urlCategory}/${id}`)
    .then((result) => dispatch(getCategorySuccess(result.data.Categories)))
    .catch((error) => dispatch(getCategoryFailed(error)));
}