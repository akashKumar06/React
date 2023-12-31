import React, { useContext, useState } from "react";

import classes from "./Header.module.css";
import FoodContext from "../../Context/FoodContext";
import CartModal from "../CartModal/CartModal";

const Header = (props) => {
  const [status, setStatus] = useState(false);
  const foodCtx = useContext(FoodContext);
  const order = foodCtx.order;

  let qty = 0;
  order.forEach((element) => {
    qty += element.qty;
  });

  const clickHandler = () => {
    setStatus(true);
  };
  
  const closeHandler = () => {
    setStatus(false);
  }

  const orderHandler = (items) => {
    setStatus(false);
    alert("Items are reaching at your destination");
  }

  return (
    <React.Fragment>
      {status === true && <div className={classes.backdrop}></div>}
      {status === true && <CartModal onClose={closeHandler} onOrder={orderHandler} items={foodCtx.order}></CartModal>}
      <div className={classes.header} onClick={clickHandler}>
        <h1>ReactMeals</h1>
        <div>
          Your cart <span className={classes.qty}>{qty}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
