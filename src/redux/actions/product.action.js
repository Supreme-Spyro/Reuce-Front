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
        dispatch(getProductRequest());
        const urlProduct = "https://reuce-back.herokuapp.com/product";
        axios
            .get(`${urlProduct}/${id}`)
            .then((result) => dispatch(getProductSuccess(result.data)))
            .catch((error) => dispatch(getProductFailed(error)));
    };
}