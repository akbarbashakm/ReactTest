import * as actionTypes from './actionTypes';

export const createProduct = (product) => {
    return {
      type: actionTypes.CREATE_NEW_PRODUCT,
      product: product
    }
  };

export const deleteProduct = (id) => {
    return {
        type: actionTypes.REMOVE_PRODUCT,
        id: id
    }
}