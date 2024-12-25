import authReducer from "./Authentication/Reducer";
import { thunk } from "redux-thunk";

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
