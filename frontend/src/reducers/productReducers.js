import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

const initialState = {
  products: []
}

export const productListReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case PRODUCT_LIST_REQUEST:
      return { loading: true }

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: payload }

    case PRODUCT_LIST_FAIL:
      return { loading: true, error: payload }

    default:
      return state
  }
}
