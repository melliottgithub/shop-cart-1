import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

const items = [
  { id: 1, src: 1, alt: "shirt1", shirt: "grey tshirt", price: "$15,00", p: 'item1' },
  { id: 2, src: 2, alt: "shirt2", shirt: "black tshirt", price: "$17,00", p: 'item2' },
  { id: 3, src: 3, alt: "shirt3", shirt: "blue tshirt", price: "$20,00", p: 'item3' },
  { id: 4, src: 4, alt: "shirt4", shirt: "red tshirt", price: "$30,00", p: 'item4' },
];

const Home = (props) => {
  return (
    <Fragment>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.src} alt={item.alt} />
          <h3>{item.shirt}</h3>
          <h3>{item.price}</h3>

          <a onClick={() => props.addBasket(item.p)} href="#g">
            Add to cart
          </a>
        </div>
      ))}
    </Fragment>
  );
};

export default connect(null, { addBasket })(Home);
