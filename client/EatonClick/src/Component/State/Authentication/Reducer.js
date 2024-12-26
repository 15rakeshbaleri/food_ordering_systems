const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
  favorites: [],
  success: null, // Fix the typo here
};

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

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case ADD_TO_FAVOURITE_REQUEST:
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        jwt: action.payload,
        user: action.payload.user, // Store the user data along with JWT if needed
        success: "login successfully",
        error: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        favorites: action.payload.favorites,
        error: null,
      };

    case ADD_TO_FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        favorites: isPresentInFavourites(state.favorites, action.payload)
          ? state.favorites.filter((item) => item.id !== action.payload.id)
          : [action.payload, ...state.favorites],
        success: null,
        error: null,
      };

    case LOGOUT:
      return initialState;

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
    case ADD_TO_FAVOURITE_FAILURE:
      return {
        ...state,
        loading: false,
        success: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default authReducer;
