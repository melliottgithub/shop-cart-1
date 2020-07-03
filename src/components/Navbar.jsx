import React, { useEffect } from "react";

import { connect } from "react-redux";
// import { addBasket } from "../actions/addAction";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart: {props.basketProps.basketNumbers}</Link>
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
