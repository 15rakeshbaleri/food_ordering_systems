import authReducer from "./Authentication/Reducer";
import menuReducer from "./Menu/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/Reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  menu: menuReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
