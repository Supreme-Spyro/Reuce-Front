import axios from "axios";

export const GET_USER_DATA_PROFILE = "GET_USER_DATA_PROFILE";
export const GET_USER_DATA_PROFILE_SUCCESS = "GET_USER DATA_PROFILE_SUCCESS";
export const GET_USER_DATA_PROFILE_FAILED = "GET_USER DATA_PROFILE_FAILED";
export const EDIT_USER_DATA_PROFILE = "EDIT_USER_DATA_PROFILE";

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

export const getUserRequestById = (id) => (dispatch) => {
  console.log("id", id);
  const uriUser = `https://reuce-back.herokuapp.com/user/${id}`;
  axios
    .get(`${uriUser}`)
    .then((result) => dispatch(getUserDataSuccess(result.data)))
    .catch((error) => dispatch(getUserDataFailed(error)));
};

export const editUserProfile = (value, event, id) => (dispatch) => {
  event.preventDefault();
  console.log("data successfully edit");
  const uriUsers = `https://reuce-back.herokuapp.com/user/${id}`;
  return axios.put(uriUsers, value).then((response) => {
    console.log(response);
    if (response.data.password === value.password) {
      dispatch(editUserProfile(response.data));
    }
  });
};
