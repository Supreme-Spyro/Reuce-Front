import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import searchReducer from "./search.reducer";
import showDataOrderItem from "./cart.reducer"
import getUserDataReducer from './getUserData.reducer'
import articleDataReducer from './article.reducer'
import articleDataByIdReducer from './getArticleDataById.reducer'

const rootReducer = combineReducers({ userReducer,searchReducer,showDataOrderItem,getUserDataReducer, articleDataReducer,articleDataByIdReducer });

export default rootReducer;
