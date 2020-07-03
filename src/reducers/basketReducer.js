import { ADD_PRODUCT_BASKET } from "../actions/types";

const initialState = {
  basketNumbers: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
      };
    default:
      return state;
  }
};