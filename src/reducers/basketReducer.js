import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    item1: {
      numbers: 0,
      inCart: false,
      shirt: "grey tshirt",
      price: 15,
    },
    item2: {
      numbers: 0,
      inCart: false,
      shirt: "black tshirt",
      price: 17,
    },
    item3: {
      numbers: 0,
      inCart: false,
      shirt: "blue tshirt",
      price: 20.0,
    },
    item4: {
      numbers: 0,
      inCart: false,
      shirt: "red tshirt",
      price: 30.0,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      let addQuantity = { ...state.products[action.payload] };
      addQuantity.numbers += 1;
      addQuantity.inCart = true;

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: addQuantity,
        },
      };

    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
