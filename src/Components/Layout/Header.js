import React, { Fragment, useContext } from "react";
import Button from "../UI/Button";
import "./Header.css";
import CartContext from "../../Store/cart-context";
import { NavLink } from "react-bootstrap";

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
          {/* <li>Home</li>
          <li>Store</li>
          <li>About</li> */}
          <NavLink className="link" to="/home">
            <div>Home</div>
          </NavLink>
          <NavLink className="link" to="/store">
            <div>Store</div>
          </NavLink>
          <NavLink className="link" to="/about">
            <div>About</div>
          </NavLink>
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
