import {
  GET_ORDER_ITEM_REQUEST,
  GET_ORDER_ITEM_SUCCESS,
  GET_ORDER_ITEM_FAILED,
} from "../actions/cart.action";

const initialState = {
  data: [],
  amount: 0,
  total: 0,
  loading: false,
  error: null,
};

const showDataOrderItem = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_ITEM_REQUEST:
      return {
        ...state,

        loading: true,
      };
    case GET_ORDER_ITEM_SUCCESS:
      return {
        ...state,

        loading: false,
        data: action.result,
        total: 0,
        amount: 0,
      };
    case GET_ORDER_ITEM_FAILED:
      return {
        ...state,

        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default showDataOrderItem;
