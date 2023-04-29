// import logo from "./logo.svg";
import React, { useState } from "react";
import Header from './Components/Header/Header'
import Cart from './Components/Cart/Cart'
import Button from "./Components/UI/Button";
import "./App.css";
import Products from "./Components/Products/Products";
// import { Button } from "bootstrap";

const App = () => {

  const[isCartOpen, setCartOpen] = useState(false)
  const closeHandler = () => {
    setCartOpen(false)
  }
  const openHandler = () => {
    setCartOpen(true)
  }

  return (
    <React.Fragment>
      <Header onOpen={openHandler} />
      <main className="app">
        <Products />
      </main>
      {isCartOpen && <Cart onClose={closeHandler} />}
      <Button>Open Cart</Button>
    </React.Fragment>
  );
  
};

export default App;
