export const selectFood = (food) => {
  return {
    type: 'SELECT_FOOD',
    payload: food
  }
}


export const selectMat = (foods) => {
  return {
    type: 'SELECT_MAT',
    payload: foods
  }
}

export const filteredByCtg = (categoryName) => {
  return {
    type: 'FILTERED_BY_CTG',
    payload: categoryName
  }
}
export const getFoodList = () => {
  return {
    type: 'GET_FOOD_LIST',
  }
}

export const setVisibRecipe = (status) => {
  return {
    type: 'SET_VISIB_RECIPE',
    payload: status
  }
}

