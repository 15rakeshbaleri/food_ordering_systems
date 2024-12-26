import {
  GET_USER_NOTIFICATIONS_REQUEST,
  GET_USER_NOTIFICATIONS_SUCCESS,
  GET_USER_NOTIFICATIONS_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_USERS_ORDERS_REQUEST,
  GET_USERS_ORDERS_SUCCESS,
  GET_USERS_ORDERS_FAILURE,
} from "./ActionType";

const initialState = {
  loading: false,
  error: null,
  notifications: [],
  orders: [],
};

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_ORDERS_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case GET_USERS_ORDERS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        orders: payload,
      };

    case GET_USERS_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
