import { combineReducers } from "redux"
import foods from "../Data/foods.json"

const foodListReducer = (state = foods, action) => {
  switch (action.type) {
    case 'GET_FOOD_LIST':
      return
    case 'ADD_FOOD':
      return [...state, action.payload]
    case 'DELETE_FOOD':
      return state.filter(s => s.id !== action.payload)
    case 'FILTERED_BY_CTG':
      return foods.filter(f => f.category === action.payload)
    default:
      return state
  }
}


const selectedFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_FOOD':
      return action.payload
    default:
      return state
  }
}

const selectedMatReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_MAT':
      return action.payload
    default:
      return state
  }
}

export const visibRecipeReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_VISIB_RECIPE':
      return action.payload
    default:
      return state
  }

}

export const reducers = combineReducers({
  foodListReducer, selectedFoodReducer, visibRecipeReducer, selectedMatReducer
})

