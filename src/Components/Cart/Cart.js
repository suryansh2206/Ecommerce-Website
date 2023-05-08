import React, { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import CartContext from "../../Store/cart-context";
import "./Cart.css";
import axios from "axios";

const Cart = (props) => {
  let amount = 0;
  const ctxobj = useContext(CartContext);
  
  const [items, setItems] = useState([]);
  
  let username = localStorage.getItem("email");
  let t = "";
  for (let i = 0; i < username.length; i++) {
    if (username[i] === "." || username[i] === "@") {
      continue;
    } else {
      t += username[i];
    }
  }
  username = t;
  
  useEffect(() => {
    axios
    .get(
      `https://crudcrud.com/api/c36ff7057e8a46878c99d888a7214aa2/${username}`
      )
      .then((res) => {
        setItems([...res.data]);
        console.log("called");
      })
      .catch((err) => console.log(err));
    }, []);
    
    ctxobj.items.map((item) => {
      amount = amount + Number(item.quantity) * Number(item.price);
    });
  return (
    <Modal onClose={props.onClose}>
      <CartItem />
      <div className="total">
        <span>
          <b>Total</b>
        </span>
        <span>${amount}</span>
      </div>
      <Button onClick={props.onClose} className="btn btn-order">
        CLOSE
      </Button>
      <Button className="btn btn-order">PURCHASE</Button>
    </Modal>
  );
};

export default Cart;
