import axios from "axios";
import { API_URL } from "../../config/api";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_REQUEST,
  ADD_TO_FAVOURITE_REQUEST,
  ADD_TO_FAVOURITE_SUCCESS,
  ADD_TO_FAVOURITE_FAILURE,
  LOGOUT,
} from "./Action_type";

export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/signup`,
      reqData.userData
    );
    if (data.jwt) localStorage.setItem("jwt", data.jwt);
    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }
    dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
    console.log(data);
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error });
  }
};

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/signin`,
      reqData.userData
    );
    if (data.jwt) localStorage.setItem("jwt", data.jwt);
    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
    console.log(data);
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const GETUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await api.get(`/auth/signin`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({ type: GET_USER_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error });
  }
};

export const addtoFavorite = (jwt, restaurantid) => async (dispatch) => {
  dispatch({ type: ADD_TO_FAVOURITE_REQUEST });
  try {
    const { data } = await api.put(
      `/api/restaurant/${restaurantid}/add-favorite`,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    dispatch({ type: ADD_TO_FAVOURITE_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: ADD_TO_FAVOURITE_FAILURE, payload: error });
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.clear();
    dispatch({ type: LOGOUT });
    console.log("logout sucessfylly");
  } catch (error) {
    console.log(error);
  }
};
