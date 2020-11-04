import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import searchReducer from "./search.reducer";
import showDataOrderItem from "./cart.reducer"

const rootReducer = combineReducers({ userReducer,searchReducer,showDataOrderItem });

export default rootReducer;
