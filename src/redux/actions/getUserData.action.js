import axios from "axios";

export const GET_USER_DATA_PROFILE = "GET_USER_DATA_PROFILE";
export const GET_USER_DATA_PROFILE_SUCCESS = "GET_USER DATA_PROFILE_SUCCESS";
export const GET_USER_DATA_PROFILE_FAILED = "GET_USER DATA_PROFILE_FAILED";
export const EDIT_USER_DATA_PROFILE = "EDIT_USER_DATA_PROFILE";
<<<<<<< HEAD
export const EDIT_USER_DATA_PROFILE_SUCCESS = "EDIT_USER_DATA_SUCCESS";


=======

>>>>>>> 91dc4fe1fb0b9d17eafe208a2eed566277e8dfd2
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
<<<<<<< HEAD
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
=======
>>>>>>> 91dc4fe1fb0b9d17eafe208a2eed566277e8dfd2
};

export const getUserRequestById = (id) => (dispatch) => {
  console.log("id", id);
  const uriUser = `https://reuce-back.herokuapp.com/user/${id}`;
  axios
    .get(`${uriUser}`)
    .then((result) => dispatch(getUserDataSuccess(result.data)))
    .catch((error) => dispatch(getUserDataFailed(error)));
};

<<<<<<< HEAD
export const editUserDataActions = (value, event, id) => (dispatch) => {
  event.preventDefault();
  console.log("register value", value);

  const uriUsers = `https://reuce-back.herokuapp.com/user/${id}`;

  return axios
    .put(uriUsers, value)
    .then((response) => {
      console.log("res", response);
      dispatch(editUserDataSuccess(response));
    })
    .catch((error) => {
      console.log(error);
    });
=======
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
>>>>>>> 91dc4fe1fb0b9d17eafe208a2eed566277e8dfd2
};
