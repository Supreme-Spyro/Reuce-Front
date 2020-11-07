import axios from "axios";
// import jwt from "jwt-decode";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";
export const EDIT_PROFILE_USER = "EDIT_PROFILE_USER";

export const registerRequest = (value) => {
  return {
    type: REGISTER_REQUEST,
    payload: value,
  };
};

export const registerSuccess = (value) => {
  return {
    type: REGISTER_SUCCESS,
    payload: value,
  };
};

export const registerFailed = (value) => {
  return {
    type: REGISTER_FAILED,
    payload: value,
  };
};

export const loginRequest = (value) => {
  return {
    type: LOGIN_REQUEST,
    payload: value,
  };
};

export const loginSuccess = (value) => {
  return {
    type: LOGIN_SUCCESS,
    payload: value,
  };
};

export const loginFailed = (value) => {
  return {
    type: LOGIN_FAILED,
    payload: value,
  };
};

export const getUserRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};

export const getUserSuccess = (result) => {
  return {
    type: GET_DATA_SUCCESS,
    result,
  };
};

export const getUserFailed = (error) => {
  return {
    type: GET_DATA_FAILED,
    error,
  };
};

export const registerActions = (value, event, history) => (dispatch) => {
  event.preventDefault();
  console.log("register value", value);

  const uriUsers = "https://reuce-back.herokuapp.com/user/register";

  return axios
    .post(uriUsers, value)
    .then((response) => {
      console.log("res", response);
      dispatch(registerSuccess(response));
      history.push("/login");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const loginActions = (value, event, history) => (dispatch) => {
  event.preventDefault();
  // console.log("value", value);
  const uriLogin = "https://reuce-back.herokuapp.com/user/login";

  return axios
    .post(uriLogin, value)
    .then((response) => {
      console.log(response);
      if (response.data.token !== undefined) {
        localStorage.setItem("token", response.data.token);
        dispatch(loginRequest())
        dispatch(loginSuccess(response.data.token));
        history.push("/");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
