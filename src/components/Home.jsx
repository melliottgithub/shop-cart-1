import React, { Fragment, useState } from "react";

const items = [
  { id: 1, src: 1, alt: "shirt1", shirt: "grey tshirt", price: "$15,00" },
  { id: 2, src: 2, alt: "shirt2", shirt: "black tshirt", price: "$17,00" },
  { id: 3, src: 3, alt: "shirt3", shirt: "blue tshirt", price: "$20,00" },
  { id: 4, src: 4, alt: "shirt4", shirt: "red tshirt", price: "$30,00" },
];

const Home = () => {
  const [basketNumbers, setBasketNumbers] = useState(0);

  const addToBasket = () => {
    console.log("Button clicked");
  };

  return (
    <Fragment>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.src} alt={item.alt} />
          <h3>{item.shirt}</h3>
          <h3>{item.price}</h3>

          <a onClick={() => addToBasket()} href="#">
            Add to cart
          </a>
        </div>
      ))}
    </Fragment>
  );
};

export default Home;
