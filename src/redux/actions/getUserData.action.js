import axios from 'axios'

export const GET_USER_DATA_PROFILE = 'GET_USER_DATA_PROFILE'
export const GET_USER_DATA_PROFILE_SUCCESS = 'GET_USER DATA_PROFILE_SUCCESS'
export const GET_USER_DATA_PROFILE_FAILED = 'GET_USER DATA_PROFILE_FAILED'
export const EDIT_USER_DATA_PROFILE = 'EDIT_USER_DATA_PROFILE'


export const getUserData = () =>{
    return{
        type: GET_USER_DATA_PROFILE,
    };
};

export const getUserDataSuccess = (value) =>{
    return{
        type: GET_USER_DATA_PROFILE_SUCCESS,
        payload:value,
    };
};


export const getUserDataFailed = (error) =>{
    return{
        type: GET_USER_DATA_PROFILE_FAILED,
        error,
    };
};

export const getDataFromAPI = (value, event, id) => (dispatch) => {
    event.preventDefault();
    console.log('data sucessfully obtained');
    const uriUsers = `https://reuce-back.herokuapp.com/user/${id}`
    return axios
    .get(uriUsers,value)
    .then((response)=>{
        console.log('res',response);
        dispatch(getUserData(response.data));
    })
    .catch((error)=>{
    console.log(console.log(error))
    })
}; 

export const editUserProfile = (value, event, id) => (dispatch) =>{
    event.preventDefault();
    console.log('data successfully edit');
    const uriUsers = `https://reuce-back.herokuapp.com/user/${id}`
    return axios
    .put(uriUsers,value)
    .then((response)=>{
        if(response.data.password == value.password){
            dispatch(editUserProfile(response.data))
            
        }
    })
}