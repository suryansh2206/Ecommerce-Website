import React, {  useContext } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import CartContext from '../../Store/cart-context'
import "./Cart.css";

const Cart = (props) => {
 
  const ctxobj = useContext(CartContext)
  let amount = 0
  ctxobj.items.map((item) => {
    amount = amount + Number(item.quantity) * Number(item.price)
  })

  return (
    <Modal onClose={props.onClose}>
      <CartItem  />
      <div className="total">
        <span><b>Total</b></span>
        <span>${amount}</span>
      </div>
      <Button onClick={props.onClose} className="btn btn-order">CLOSE</Button>
      <Button className="btn btn-order">PURCHASE</Button>
    </Modal>
  );
};

export default Cart;