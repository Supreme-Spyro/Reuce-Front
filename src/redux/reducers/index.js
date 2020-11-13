import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import searchReducer from "./search.reducer";
import showDataOrderItem from "./cart.reducer";
import getUserDataReducer from "./getUserData.reducer";
import articleDataReducer from "./article.reducer";
import articleDataByIdReducer from "./getArticleDataById.reducer";
import getProductReducer from "./product.reducer";
import getCategoryReducer from "./category.reducer";
import showDataOrder from "./checkout.reducers";

const rootReducer = combineReducers({
  userReducer,
  searchReducer,
  showDataOrderItem,
  getUserDataReducer,
  articleDataReducer,
  articleDataByIdReducer,
  getProductReducer,
  getCategoryReducer,
  showDataOrder
});

export default rootReducer;
