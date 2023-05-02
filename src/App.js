// import logo from "./logo.svg";
import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Cart from "./Components/Cart/Cart";
import Button from "./Components/UI/Button";
import "./App.css";
import Products from "./Components/Products/Products";
import ProductsPage from "./Components/Products/ProductsPage";
import ContextProvider from "./Store/ContextProvider";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const closeHandler = () => {
    setCartOpen(false);
  };
  const openHandler = () => {
    setCartOpen(true);
  };

  return (
    <ContextProvider>
      {isCartOpen && <Cart onClose={closeHandler} />}
      <Header onOpen={openHandler} />
      <Routes>
      <Route path="/product-detail/:id" element={<ProductsPage />} />
      <Route path="/home" element={<Home />} />
        {/* <Route path="/store" /> */}
        <Route
          path="/"
          element={
            <>
              <main>
                <Products />
              </main>
              <Button onClick={openHandler}>Open Cart</Button>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </ContextProvider>
  );
};

export default App;
