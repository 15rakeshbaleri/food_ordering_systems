import axios from "axios";
import {
  GET_RESTAURANT_ORDER_REQUEST,
  GET_RESTAURANT_ORDER_SUCCESS,
  GET_RESTAURANT_ORDER_FAILURE,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
} from "./ActionType";

import { API_URL } from "../../config/api";

export const update_orderstatus = ({ orderid, orderstatus, jwt }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
      const response = await api.put(
        `/api/admin/orders/${orderid}/${orderstatus}`,
        {},
        { headers: { Authorization: `Bearer ${jwt}` } }
      );
      const updateorder = response.data;
      console.log(updateorder);
      dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: updateorder });
    } catch (error) {
      dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error });
    }
  };
};

export const fetch_restaurant_order = ({ restaurant_id, orderstatus, jwt }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_RESTAURANT_ORDER_REQUEST });
      const { data } = await api.get(
        `/api/admin/order/restaurant/${restaurant_id}`,

        {
          params: { order_status: orderstatus },
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      const order = data;
      console.log(order);
      dispatch({ type: GET_RESTAURANT_ORDER_SUCCESS, payload: order });
    } catch (error) {
      dispatch({ type: GET_RESTAURANT_ORDER_FAILURE, payload: error });
    }
  };
};
