import axios from "axios";

export const GET_ARTICLE_DATA = "GET_ARTICLE_DATA";
export const GET_ARTICLE_DATA_SUCCESS = "GET_ARTICLE_DATA_SUCCESS";
export const GET_ARTICLE_DATA_FAILED = "GET_ARTICLE_DATA_FAILED";

export const getArticleData = () => {
  return {
    type: GET_ARTICLE_DATA,
  };
};

export const getArticleDataSuccess = (value) => {
  return {
    type: GET_ARTICLE_DATA_SUCCESS,
    payload: value,
  };
};

export const getArticleDataFailed = (error) => {
  return {
    type: GET_ARTICLE_DATA_FAILED,
    error,
  };
};

export const getArticleDataForHome = (data) => (dispatch) => {
  console.log("article data", data);
  const uriArticle = "https://reuce-back.herokuapp.com/artikel";
  return axios
    .get(uriArticle)
    .then((result) => {
      // console.log("res", result);
      dispatch(getArticleDataSuccess(result.data));
    })
    .catch((error) => dispatch(getArticleDataFailed(error)));
};

export const postArticleActions = (value, event, history) => (dispatch) => {
  event.preventDefault();
  const uriArticle = "https://reuce-back.herokuapp.com/artikel";
  return axios
    .post(uriArticle, value)
    .then((result) => {
      // console.log("res", result);
      window.location.href = "/admin/articles";
    })
    .catch((error) => console.log(error));
};

export const updateArticleActions = (value, event, history, id) => (
  dispatch
) => {
  event.preventDefault();
  const uriArticle = `https://reuce-back.herokuapp.com/artikel/${id}`;
  return axios
    .put(uriArticle, value)
    .then((result) => {
      // console.log("res", result);
      history.push("/admin/articles");
    })
    .catch((error) => console.log(error));
};

export const deleteArticleActions = (id, event, history) => (dispatch) => {
  event.preventDefault();
  const uriArticle = `https://reuce-back.herokuapp.com/artikel/${id}`;
  return axios
    .delete(uriArticle)
    .then((result) => {
      // console.log("res", result);
      window.location.href = "/admin/articles";
    })
    .catch((error) => console.log(error));
};
