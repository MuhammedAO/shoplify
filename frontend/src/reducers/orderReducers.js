import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../constants/orderConstants"


const initialState = {}

export const orderCreateReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ORDER_CREATE_REQUEST:
      return {
        loading: true
      }
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: payload
      }
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: payload
      }
    default:
      return state
  }
}
