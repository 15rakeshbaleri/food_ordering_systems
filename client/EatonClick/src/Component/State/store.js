import authReducer from "./Authentication/Reducer";
import menuReducer from "./Menu/Reducer";
import cartReducer from "./cart/Reducer";
import orderReducer from "./Order/Reducer";
import ingredientReducer from "./Ingredients/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/Reducer";
import restaurantorderReducer from "./Restaurant_order/Reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  menu: menuReducer,
  cart: cartReducer,
  order: orderReducer,
  restaurantorder: restaurantorderReducer,
  ingredient: ingredientReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
