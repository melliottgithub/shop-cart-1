import React from "react";

import {connect} from 'react-redux'
import { addBasket } from "../actions/addAction";

const Navbar = () => {
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
            <a href="/">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default connect(null,{addBasket}) (Navbar);
