import axios from "axios";

export const GET_USER_DATA_PROFILE = "GET_USER_DATA_PROFILE";
export const GET_USER_DATA_PROFILE_SUCCESS = "GET_USER DATA_PROFILE_SUCCESS";
export const GET_USER_DATA_PROFILE_FAILED = "GET_USER DATA_PROFILE_FAILED";
export const EDIT_USER_DATA_PROFILE = "EDIT_USER_DATA_PROFILE";
export const EDIT_USER_DATA_PROFILE_SUCCESS = "EDIT_USER_DATA_SUCCESS";

export const getUserData = () => {
  return {
    type: GET_USER_DATA_PROFILE,
  };
};

export const getUserDataSuccess = (value) => {
  return {
    type: GET_USER_DATA_PROFILE_SUCCESS,
    payload: value,
  };
};

export const getUserDataFailed = (error) => {
  return {
    type: GET_USER_DATA_PROFILE_FAILED,
    error,
  };
};

export const editUserData = (value) => {
  return {
    type: EDIT_USER_DATA_PROFILE,
    payload: value,
  };
};

export const editUserDataSuccess = (value) => {
  return {
    type: EDIT_USER_DATA_PROFILE_SUCCESS,
    payload: value,
  };
};

export const getUserRequestById = (id) => (dispatch) => {
  const uriUser = `https://reuce-back.herokuapp.com/user/${id}`;
  axios
    .get(`${uriUser}`)
    .then((result) => {
      // console.log("res", result);
      dispatch(getUserDataSuccess(result.data.Users));
    })
    .catch((error) => dispatch(getUserDataFailed(error)));
};

export const editUserDataActions = (value, event, id, history) => (
  dispatch
) => {
  event.preventDefault();
  // console.log("register value", value);

  const uriUsers = `https://reuce-back.herokuapp.com/user/${id}`;

  return axios
    .put(uriUsers, value)
    .then((response) => {
      // console.log("res", response);
      dispatch(editUserDataSuccess(response));
      window.location.href = `/profile/${id}`;
    })
    .catch((error) => {
      console.log(error);
    });
};
