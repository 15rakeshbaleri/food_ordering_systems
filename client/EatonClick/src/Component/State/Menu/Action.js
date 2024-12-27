import { api } from "../../config/api";
import {
  CREATE_MENU_ITEM_REQUEST,
  CREATE_MENU_ITEM_SUCCESS,
  CREATE_MENU_ITEM_FAILURE,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
  DELETE_MENU_ITEM_REQUEST,
  DELETE_MENU_ITEM_SUCCESS,
  DELETE_MENU_ITEM_FAILURE,
  SEARCH_MENU_ITEM_REQUEST,
  SEARCH_MENU_ITEM_SUCCESS,
  SEARCH_MENU_ITEM_FAILURE,
  UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST,
  UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
  UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
} from "./ActionType";

export const createMenuItemRequest = ({ menu, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_MENU_ITEM_REQUEST });
    try {
      const res = await api.post("/api/admin/food", menu, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: menu });
    } catch (error) {
      dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
    }
  };
};

export const getMenu_Itemsby_RestaurantID = ({ reqData }) => {
  return async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
    try {
      const { data } = await api.get(
        `/api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.foodcategory}`,

        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`,
          },
        }
      );
      console.log("data in action", data);
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
        payload: error,
      });
    }
  };
};

export const searchMenuItem = ({ keyword, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
    try {
      const res = await api.get(`/api/food/search?name=${keyword}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error });
    }
  };
};

export const getAll_IngredientsofMenuitems = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
    try {
      const { data } = await api.get(
        `/api/food/restaurant/${reqData.restaurant_id}`,
        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`,
          },
        }
      );
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
        payload: error,
      });
    }
  };
};

export const updatemenu_itemAvilablity = ({ foodId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });
    try {
      const { data } = await api.put(
        `/api/admin/food/${foodId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
        payload: error,
      });
    }
  };
};
export const Delete_food = ({ foodid, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.delete(`/api/admin/food/${foodid}`, {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });
      dispatch({
        type: DELETE_MENU_ITEM_SUCCESS,
        payload: foodid,
      });
    } catch (error) {
      dispatch({
        type: DELETE_MENU_ITEM_FAILURE,
        payload: error,
      });
    }
  };
};
