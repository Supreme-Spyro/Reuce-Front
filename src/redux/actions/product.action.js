import axios from "axios";
import { GET_SEARCH_FAILED } from "./search.action";

export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILED = "GET_PRODUCT_FAILED";

export const getProductRequest = () => {
    return {
        type: GET_PRODUCT_REQUEST,
    };
};

export const getProductSuccess = (result) => {
    return {
        type: GET_PRODUCT_SUCCESS,
        result,
    };
};

export const getProductFailed = (error) => {
    return {
        type: GET_SEARCH_FAILED,
        error
    };
};

export function getAllProductActions(){
    return function (dispatch) {
        dispatch(getProductRequest());
        const urlProduct = "https://reuce-back.herokuapp.com/product";
        axios
            .get(`${urlProduct}`)
            .then((result) => dispatch(getProductSuccess(result.data)))
            .catch((error) => dispatch(getProductFailed(error)));
    };
};

export function getProductActions(id) {
    return function (dispatch) {
        console.log('id',id)
        dispatch(getProductRequest());
        const urlProductId = `https://reuce-back.herokuapp.com/product/${id}`;
        axios
            .get(`${urlProductId}`)
            .then((result) => dispatch(getProductSuccess(result.data)))
            .catch((error) => dispatch(getProductFailed(error)));
    };
};

export function postProductActions(value, user_id, event, history) {
    return function (dispatch) {
        console.log("data value: ", value)

        event.preventDefault();
        // let body = new FormData();
        // body.append("dataValue",value);
        // console.log("data body: ", body)
        // const myurl = 'https://reuce-back.herokuapp.com/product'
        // axios({
        //     method: 'POST',
        //     url: myurl,
        //     data: value,
        //     // headers: {'Content-Type': 'multipart/form-data' }
        //     })
        axios
        .post('https://reuce-back.herokuapp.com/product', value)
        .then((result) => {
            console.log("res", result);
            window.location.href = `/profile/${user_id}`;
          })
        .catch((error) => console.log(error));
    }
}

export function deleteProductActions  (id, event, history){
    return function (dispatch) {
        event.preventDefault();
        const uri = `https://reuce-back.herokuapp.com/product/${id}`;
         axios
          .delete(uri)
          .then((result) => {
            history.push(`/myshop/${id}`)
            dispatch(getProductSuccess(result.data))
          })
          .catch((error) => console.log(error));
      };
}

export function updateProductActions (value, event, id, userId) {
    return function (dispatch){
        event.preventDefault();
    const uri = `https://reuce-back.herokuapp.com/product/${id}`;
     axios
      .put(uri, value)
      .then((result) => {
        // console.log("res", result);
        dispatch(getProductSuccess(result.data))
        window.location.href=`/myshop/${userId}`
      })
      .catch((error) => console.log(error));
    }
    
  };