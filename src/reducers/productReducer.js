import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_PRODUCT:
      let currentState;
      let isExit = state.some((pro) => {
        return pro.name === action.product.name;
      });
      if (isExit) {
        currentState = state
      } else {
        currentState = [
          ...state,
          Object.assign({}, action.product)
        ]
      }
      return currentState;
    case actionTypes.REMOVE_PRODUCT:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};