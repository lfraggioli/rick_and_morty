import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allFavorites: [],
  detail: {},
};

function rootReducer (state = initialState, action){
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allFavorites: [...state.allFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER_FAV:
      let favoriteFiltered =
        action.payload === "All"
          ? state.allFavorites
          : state.allFavorites.filter((char) => char.gender === action.payload);

      return {
        ...state,
        myFavorites: favoriteFiltered,
      };
    case ORDER_FAV: // 4. Agregamos el caso "ORDER"
    let favoritesOrdered = state.myFavorites.sort((a, b) => {
      return action.payload === "A" ? a.id - b.id : b.id - a.id
  })

  return {
      ...state,
      myFavorites: favoritesOrdered
  }
    default:
      return { ...state };
  }
};
export default rootReducer;