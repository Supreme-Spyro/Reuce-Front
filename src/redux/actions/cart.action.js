import axios from 'axios'

export const GET_ORDER_ITEM_REQUEST = "GET_ORDER_ITEM_REQUEST";
export const GET_ORDER_ITEM_SUCCESS = "GET_ORDER_ITEM_SUCCESS";
export const GET_ORDER_ITEM_FAILED = "GET_ORDER_ITEM_FAILED";

export const getOrderItemRequest = () =>{
    return{
        type: GET_ORDER_ITEM_REQUEST
    }
};

export const getOrderItemSuccess = (result) =>{
    return{
        type: GET_ORDER_ITEM_SUCCESS,
        result
    }
};

export const getOrderItemFailed = (error) =>{
    return{
        type: GET_ORDER_ITEM_FAILED,
        error
    }
};





export const getDataOrderItem = (value, event, history, id) => (dispatch) => {
  getOrderItemRequest();

  axios
    .get(
      ""
    )
    .then((result) => dispatch(getOrderItemSuccess(result.data)))
    .catch((error) => dispatch(getOrderItemFailed(error)));
};

export const deleteDataOrderItem = (id) => (dispatch) => {
    axios
    .delete(`/${id}`)
    .then((response) => {
        console.log(response);
        dispatch(getDataOrderItem())
    })
};

export const updateDataOrderItem =  (id, data) => (dispatch) =>{
    axios
    .put(`/${id}`, { quantity: data})
    .then((response)=>{
        console.log(response)
        dispatch(getDataOrderItem())
    })
};

export const postOrderItem = (data, e) => (dispatch) => {
    
    
      axios
        .post(``, {
          product_id: data,
          quantity:1
        })
        .then((response) => {
          console.log("response", response);
          dispatch(getDataOrderItem());
        });
    
  };