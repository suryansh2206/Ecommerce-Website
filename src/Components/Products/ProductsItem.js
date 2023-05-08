import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Button from "../UI/Button";
import "./Product.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const ProductItems = (props) => {
  const ctxobj = useContext(CartContext);
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
  const addHandler = () => {
    axios
      .post(
        `https://crudcrud.com/api/c36ff7057e8a46878c99d888a7214aa2/${username}`,
        {
          ...props.item,
          quantity: 1,
        }
      )
      .then((res) => ctxobj.addItem(res.data))
      .catch((err) => console.log(err));
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
