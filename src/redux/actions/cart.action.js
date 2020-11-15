import axios from "axios";

export const GET_ORDER_ITEM_REQUEST = "GET_ORDER_ITEM_REQUEST";
export const GET_ORDER_ITEM_SUCCESS = "GET_ORDER_ITEM_SUCCESS";
export const GET_ORDER_ITEM_FAILED = "GET_ORDER_ITEM_FAILED";

export const getOrderItemRequest = () => {
  return {
    type: GET_ORDER_ITEM_REQUEST,
  };
};

export const getOrderItemSuccess = (result) => {
  return {
    type: GET_ORDER_ITEM_SUCCESS,
    result,
  };
};

export const getOrderItemFailed = (error) => {
  return {
    type: GET_ORDER_ITEM_FAILED,
    error,
  };
};

export const getDataOrderItem = (id) => (dispatch) => {
  getOrderItemRequest();
  const uriOrder = "https://reuce-back.herokuapp.com/order-item/user";
  axios
    .get(`${uriOrder}/${id}`)
    .then((result) => dispatch(getOrderItemSuccess(result.data)))
    .catch((error) => dispatch(getOrderItemFailed(error)));
};

export const deleteDataOrderItem = (order_id, user_id) => (dispatch) => {
  axios
    .delete(`https://reuce-back.herokuapp.com/order-item/${order_id}`)
    .then((response) => {
      console.log(response);
      window.location.href = `/shopcart/${user_id}`;
    });
};

export const deleteAllDataOrderItem = (user_id) => (dispatch) =>{
  axios
  .delete(`https://reuce-back.herokuapp.com/order-item/deleteAll/${user_id}`)
  .then((result) =>{
    console.log("result delete all: ", result);
    setTimeout(()=>{
      window.location.href = '/';
    },1500)
  })
  .catch((error)=>{
    console.log("data error delete all: ", error)
  })
}

export const updateDataOrderItem = (id, data) => (dispatch) => {
  axios
    .put(`https://reuce-back.herokuapp.com/order-item/${id}`, { num: data })
    .then((response) => {
      console.log(response);
      dispatch(getDataOrderItem());
    });
};

export const postOrderItem = (user_id, product_id) => (dispatch) => {
  axios
    .post(`https://reuce-back.herokuapp.com/order-item`, {
      user: user_id,
      product: product_id,
    })
    .then((response) => {
      console.log("response", response);
      window.location.href = `/product/${product_id}`;
      // dispatch(getDataOrderItem(user_id));
    });
};
