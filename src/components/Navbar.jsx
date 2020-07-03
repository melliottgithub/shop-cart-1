import React, { useEffect } from "react";

import { connect } from "react-redux";
// import { addBasket } from "../actions/addAction";
import { getNumbers } from "../actions/getAction";

const Navbar = (props) => {
  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <header>
      <nav>
        <h2>Shop</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Cart: {props.basketProps.basketNumbers}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
