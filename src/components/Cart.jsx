import React from "react";
import { connect } from "react-redux";

const Cart = ({ basketProps }) => {
    console.log('aqui',basketProps);
    
  return (
    <div>
          <h1>Cart</h1>
          <div>{basketProps.basketNumbers} items</div>
          <div>${basketProps.cartCost}.00</div>
          <div>{basketProps.products.item1.price}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps)(Cart);
