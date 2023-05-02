import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Button from "../UI/Button";
import "./Product.css";
import { NavLink } from "react-router-dom";

const ProductItems = (props) => {
  const ctxobj = useContext(CartContext);
  const addHandler = () => {
    ctxobj.addItem({ ...props.item, quantity: 1 });
  };
  return (
    <ul className="product-items" id={props.id}>
      <li>
        <h3>{props.item.title}</h3>
      </li>
      <li>
        <img src={props.item.imageUrl} alt={props.item.title} />
      </li>
      <li>
        <h4>${props.item.price}</h4>
      </li>
      <li>
        <Button className="btn-purchase" onClick={addHandler}>
          Add to Cart
        </Button>
        <NavLink
          className="btn btn-purchase"
          state={props.item}
          to={`/product-detail/${props.id}`}
        >
          Check product
        </NavLink>
      </li>
    </ul>
  );
};

export default ProductItems;
