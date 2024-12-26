import restaurantReducer from "../Restaurant/Reducer";
import {
  GET_RESTAURANT_ORDER_REQUEST,
  GET_RESTAURANT_ORDER_SUCCESS,
  GET_RESTAURANT_ORDER_FAILURE,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
} from "./ActionType";

const restaurantorderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT_ORDER_REQUEST:
    case UPDATE_ORDER_STATUS_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_RESTAURANT_ORDER_SUCCESS:
      return { ...state, loading: false, order: action.payload };

    case UPDATE_ORDER_STATUS_SUCCESS:
      const update_orderstatus = state.order.map((order) => {
        if (order.id === action.payload.id ? action.payload : order);
        return order;
      });
      return { ...state, loading: false, order: update_orderstatus };

    case GET_RESTAURANT_ORDER_FAILURE:
    case UPDATE_ORDER_STATUS_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default restaurantReducer;
