import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} exact />
          </Switch>
        </BrowserRouter>
    </Provider>
  );
};

export default App;
