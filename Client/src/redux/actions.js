import axios from 'axios'
import { ADD_FAV, REMOVE_FAV, ORDER_FAV, FILTER_FAV } from "./actionTypes"

// export const addFav = (payload)=>{
//     return{
//         type: ADD_FAV,
//         payload
//     }
// }

//!Promise
// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
//     };
//  };

export const addFav = (character) =>{
   const endpoint = 'http://localhost:3001/rickandmorty/fav';

   try {
      return async (dispatch)=>{
         const {data} = await axios.post(endpoint, character);
         return dispatch({
                         type: ADD_FAV,
                         payload: data,
                      });
      };
   } catch (error) {
      console.log(error);
   }
}

// export const removeFav = (id)=>{
//     return{
//         type: REMOVE_FAV,
//         payload: id
//     }
// }

//* ACTION PROMISE | removeFav
// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//        });
//        });
//     };
//  };
export const removeFav = (id) => {
    try {
       return async (dispatch) => {
       const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
         const {data} = await axios.delete(endpoint);
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
    };
    } catch (error) {
      console.log(error);
    }
 };


export const filterCards = (gender) =>{
    return{
        type: FILTER_FAV,
        payload: gender
    }
}

export const orderCards = (order)=>{
    return {
        type: ORDER_FAV,
        payload: order
    }
}