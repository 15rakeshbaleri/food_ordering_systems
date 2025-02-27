import { api } from "../../../Component/config/api";

import {
  FIND_CART_REQUEST,
  FIND_CART_SUCCESS,
  FIND_CART_FAILURE,
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
  CLEAR_CART_FAILURE,
  GET_ALL_CART_ITEMS_REQUEST,
  GET_ALL_CART_ITEMS_SUCCESS,
  GET_ALL_CART_ITEMS_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
  UPDATE_CARTITEM_REQUEST,
  UPDATE_CARTITEM_SUCCESS,
  UPDATE_CARTITEM_FAILURE,
  REMOVE_CARTITEM_REQUEST,
  REMOVE_CARTITEM_SUCCESS,
  REMOVE_CARTITEM_FAILURE,
} from "./ActionTypes";

export const findCart = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: FIND_CART_REQUEST });
    try {
      const res = await api.get("/api/cart", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Cart Data:", res.data);
      dispatch({ type: FIND_CART_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: FIND_CART_FAILURE, payload: error.message });
    }
  };
};

export const getAllCartItems = ({ cartId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });
    try {
      const headers = { Authorization: `Bearer ${jwt}` };
      const res = await api.get(`/api/carts/${cartId}/items`, { headers });
      dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error.message });
    }
  };
};

export const addItemToCart = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    try {
      const { data } = await api.put("/api/cart/add", reqData.cartitems, {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });
      console.log("Request Data:", data);
      dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
    }
  };
};

export const updatecartitem = ({ data, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CARTITEM_REQUEST });
    try {
      const res = await api.put("/api/cart-item/update", data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Update Cart Item:", res.data);
      dispatch({ type: UPDATE_CARTITEM_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: UPDATE_CARTITEM_FAILURE, payload: error.message });
    }
  };
};

export const removeCartItem = ({ cartid, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_CARTITEM_REQUEST });
    try {
      const headers = { Authorization: `Bearer ${jwt}` };
      const res = await api.delete(`api/cart-item/${cartid}/remove`, {
        headers,
      });
      dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: REMOVE_CARTITEM_FAILURE, payload: error.message });
    }
  };
};

export const clearCart = () => {
  return async (dispatch) => {
    dispatch({ type: CLEAR_CART_REQUEST });
    try {
      const { data } = await api.put(
        `/api/cart/clear`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );

      dispatch({ type: CLEAR_CART_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CLEAR_CART_FAILURE, payload: error.message });
    }
  };
};
