import { data } from "react-router-dom";
import { api } from "../../config/api";

import {
  GET_ALL_RESTAURANT_REQUEST,
  GET_ALL_RESTAURANT_SUCCESS,
  GET_ALL_RESTAURANT_FAILURE,
  GET_RESTAURANT_BY_ID_REQUEST,
  GET_RESTAURANT_BY_ID_SUCCESS,
  GET_RESTAURANT_BY_ID_FAILURE,
  CREATE_RESTAURANT_REQUEST,
  CREATE_RESTAURANT_SUCCESS,
  CREATE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_REQUEST,
  UPDATE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_STATUS_REQUEST,
  UPDATE_RESTAURANT_STATUS_SUCCESS,
  UPDATE_RESTAURANT_STATUS_FAILURE,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  GET_RESTAURANTS_CATEGORY_REQUEST,
  GET_RESTAURANTS_CATEGORY_SUCCESS,
  DELETE_RESTAURANT_SUCCESS,
  GET_RESTAURANTS_CATEGORY_FAILURE,
} from "./ActionType";

export const getAllRestaurantsaction = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANT_REQUEST });
    try {
      const { data } = await api.get("/api/restaurants", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("data", data);
      dispatch({ type: GET_ALL_RESTAURANT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_ALL_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const getRestaurantById = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
    try {
      const response = await api.get(
        `/api/restaurants/${reqData.restaurantById}`,
        {
          headers: {
            Authorization: `Bearer ${reqData.token}`,
          },
        }
      );
      dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
    }
  };
};

export const create_Restaurant = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST });
    try {
      const { data } = await api.post("/api/admin/restaurants", reqData.data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data });
      console.log("create restaurant", data);
    } catch (error) {
      dispatch({ type: CREATE_RESTAURANT_FAILURE });
    }
  };
};

export const update_restaurant = ({ resturantid, resturantdata, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST });
    try {
      const res = await api.put(
        `/api/admin/restaurants/${resturantid}`,
        resturantdata,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: UPDATE_RESTAURANT_REQUEST, payload: res.data });
    } catch (error) {
      dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error });
    }
  };
};

export const delete_Restaurant = ({ resturantid, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_EVENT_REQUEST });
    try {
      const res = await api.put(`/api/admin/restaurants/${resturantid}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: DELETE_EVENT_SUCCESS, payload: resturantid });
    } catch (error) {
      dispatch({ type: DELETE_EVENT_FAILURE, payload: error });
    }
  };
};

export const update_restaurant_status = ({ resturantid, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
    try {
      const res = await api.put(
        `/api/admin/restaurants/${resturantid}/status`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: UPDATE_RESTAURANT_STATUS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
    }
  };
};

export const Create_event = ({ resturantid, eventdata, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_EVENT_REQUEST });
    try {
      const res = await api.post(
        `/api/admin/events/restaurant/${resturantid}`,
        eventdata,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: CREATE_EVENT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: CREATE_EVENT_FAILURE, payload: error });
    }
  };
};

export const getAllevents = ({ jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });
    try {
      const res = await api.get(`/api/events`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: GET_ALL_EVENTS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });
    }
  };
};

export const deleteEventAction = ({ eventid, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_EVENT_SUCCESS });
    try {
      const res = await api.get(`/api/admin/events/${eventid}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: DELETE_EVENT_SUCCESS,
        payload: eventid,
      });
    } catch (error) {
      dispatch({ type: DELETE_EVENT_FAILURE, payload: error });
    }
  };
};

export const Get_resturant_event = ({ resturantid, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
    try {
      const res = await api.get(`/api/admin/events/${resturantid}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: GET_RESTAURANT_BY_ID_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
    }
  };
};

export const create_category_action = ({ reqData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    try {
      const res = await api.get(`/api/admin/category`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: CREATE_CATEGORY_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
    }
  };
};

export const getRestaurantCategory = ({ restaurantId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });
    try {
      const res = await api.get(`/api/category/restaurant/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: GET_RESTAURANTS_CATEGORY_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error });
    }
  };
};
