import { ADD_FAV, REMOVE_FAV, ORDER_FAV, FILTER_FAV } from "./actionTypes"

export const addFav = (payload)=>{
    return{
        type: ADD_FAV,
        payload
    }
}

export const removeFav = (id)=>{
    return{
        type: REMOVE_FAV,
        payload: id
    }
}

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