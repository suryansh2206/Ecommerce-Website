import React, { useState } from "react";
import CartContext from "./cart-context";

const ContextProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, settotalAmount] = useState(0);

  const addItemHandler = (item) => {
    let existingIndex = items.findIndex((each) => each.id === item.id);
    let existingItem = items[existingIndex];
    let newAmount = 0;
    let updatedItems;
    if (existingItem !== undefined) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + item.quantity,
      };
      updatedItems = [...items];
      updatedItems[existingIndex] = updatedItem;
      updateItems([...updatedItems]);
    } else {
      updateItems([...items, item]);
    }
    items.forEach((each) => {
      newAmount = newAmount + each.quantity * each.price;
      // console.log(newAmount);
    });
    settotalAmount(newAmount);
  };

  const removeItemHandler = (item) => {
    const existingIndex = items.findIndex((each) => each.id === item.id);
    const existingItem = items[existingIndex];
    let updatedItems,
      quantity = 0;
      let newAmount=0;
    if (existingItem !== undefined) {
      quantity = existingItem.quantity - 1;
      if (quantity < 0 || quantity === 0) {
        quantity = 0;
        updatedItems = items.filter((each) => each.id !== item.id);
        updateItems([...updatedItems]);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: quantity,
        };
        updatedItems = [...items];
        updatedItems[existingIndex] = updatedItem;
        updateItems([...updatedItems]);
      }
    } else {
      updateItems([...items]);
    }
    items.forEach((each) => {
      newAmount = newAmount - each.quantity * each.price;
    });
    settotalAmount(newAmount);
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
