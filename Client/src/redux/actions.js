import axios from "axios";
import { ADD_FAV, REMOVE_FAV, ORDER_FAV, FILTER_FAV } from "./actionTypes";

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        character
      );
      const data = response.data;
      console.log(data);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER_FAV,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER_FAV,
    payload: order,
  };
};
