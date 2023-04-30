// import logo from "./logo.svg";
import React, { useState } from "react";
import Header from './Components/Header/Header'
import Cart from './Components/Cart/Cart'
import Button from "./Components/UI/Button";
import "./App.css";
import Products from "./Components/Products/Products";
import ContextProvider from './Store/ContextProvider'
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
    <ContextProvider>
      {isCartOpen && <Cart onClose={closeHandler} />}
      <Header onOpen={openHandler} />
      <main>
        <Products />
      </main>
      <Button onClick={openHandler}>Open Cart</Button>
    </ContextProvider>
  );
  
};

export default App;
