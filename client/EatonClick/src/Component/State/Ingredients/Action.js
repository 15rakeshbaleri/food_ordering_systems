import axios from "axios";
import {
  GET_INGREDIENTS,
  UPDATE_STOCK,
  CREATE_INGREDIENT_REQUEST,
  CREATE_INGREDIENT_SUCCESS,
  CREATE_INGREDIENT_FAILURE,
  CREATE_INGREDIENT_CATEGORY_REQUEST,
  CREATE_INGREDIENT_CATEGORY_SUCCESS,
  CREATE_INGREDIENT_CATEGORY_FAILURE,
  GET_INGREDIENT_CATEGORY_REQUEST,
  GET_INGREDIENT_CATEGORY_SUCCESS,
  GET_INGREDIENT_CATEGORY_FAILURE,
} from "./Actiontype";

import { API_URL } from "../../config/api";

export const getIngredientsofRestaurant = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const respose = await axios.get(
        `/api/admin/ingredients/restaurant/${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: GET_INGREDIENTS, payload: respose.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const create_ingredient = ({ data, jwt }) => {
  return async (dispatch) => {
    try {
      const respose = await axios.post(`/api/admin/ingredients`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log(respose.data);
      dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: respose.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const create_ingredient_category = ({ data, jwt }) => {
  return async (dispatch) => {
    try {
      const respose = await axios.post(
        `/api/admin/ingredients/category`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log(respose.data);
      dispatch({
        type: CREATE_INGREDIENT_CATEGORY_SUCCESS,
        payload: respose.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Get_ingredient_category = ({ data, jwt }) => {
  return async (dispatch) => {
    try {
      const respose = await axios.post(
        `/api/admin/ingredients/restaurant/${id}/category`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log(respose.data);
      dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: respose.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatestockofIngredient = ({ id, jwt }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `/api/admin/ingredients/${id}/stock`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log(respose.data);
      dispatch({ type: UPDATE_STOCK, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
