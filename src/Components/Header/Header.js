import React, { Fragment, useContext } from "react";
import Button from "../UI/Button";
import "./Header.css";
import CartContext from "../../Store/cart-context";

const Header = (props) => {
  const ctxobj = useContext(CartContext);
  let totalQuantity = 0;
  const items = ctxobj.items;
  for (let i = 0; i < items.length; i++) {
    totalQuantity = totalQuantity + items[i].quantity;
  }
  return (
    <Fragment>
      <div className="container">
        <ul className="header-items">
          <li>Home</li>
          <li>Store</li>
          <li>About</li>
          <li>
            <Button onClick={props.onOpen}>Cart {totalQuantity}</Button>
          </li>
        </ul>
      </div>
      <div className="header">
        <h1>Ecommerce Store</h1>
      </div>
    </Fragment>
  );
};

export default Header;
