import { api } from "../../../Component/config/api";
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

export const createorder = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    console.log("reqData", reqData.data.order);
    console.log("jwt", reqData.data.jwt);
    try {
      const { data } = await api.post("/api/order", reqData.data.order, {
        headers: { Authorization: `Bearer ${reqData.data.jwt}` },
      });

      // if(data.paymenturl){
      //  window.location.href=data.paymenturl;
      // }
      console.log("create order data", data);
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    }
  };
};
export const getUserOrders = ({ jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_ORDERS_REQUEST });

    try {
      const { data } = await api.get("/api/order/user", {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      console.log("user order ", data);
      dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload: data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error.message });
    }
  };
};
