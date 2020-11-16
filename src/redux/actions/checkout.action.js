import axios from 'axios'

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export const getOrderRequest = () =>{
    return{
        type: GET_ORDER_REQUEST
    }
};

export const getOrderSuccess = (result) =>{
    return{
        type: GET_ORDER_SUCCESS,
        result
    }
};

export const getOrderFailed = (error) =>{
    return{
        type: GET_ORDER_FAILED,
        error
    }
};





export const getDataOrder = () => (dispatch) => {
  getOrderRequest();

  axios
    .get(
      "https://reuce-back.herokuapp.com/order"
    )
    .then((result) => dispatch(getOrderSuccess(result.data)))
    .catch((error) => dispatch(getOrderFailed(error)));
};

export const deleteDataOrder = (id) => (dispatch) => {
    axios
    .delete(`https://reuce-back.herokuapp.com/order/${id}`)
    .then((response) => {
        // console.log(response);
        dispatch(getDataOrder())
    })
};