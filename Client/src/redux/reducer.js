import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_FAV,
  ORDER_FAV,
  GET_FAV,
  LOGIN,
} from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],

  access: false,
  detail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: [...state.allCharacters, action.payload],
      };
    case GET_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        access: action.payload,
      };
    case FILTER_FAV:
      let favoriteFiltered =
        action.payload === "All"
          ? state.myFavorites
          : state.myFavorites.filter((char) => char.gender === action.payload);

      return {
        ...state,
        myFavorites: favoriteFiltered,
      };
    case ORDER_FAV:
      let favoritesOrdered = [...state.myFavorites]; // Copia del array para evitar mutar el estado directamente
      favoritesOrdered.sort((a, b) => {
        return action.payload === "A" ? a.id - b.id : b.id - a.id;
      });

      return {
        ...state,
        myFavorites: favoritesOrdered,
      };
    default:
      return state;
  }
}
export default rootReducer;
