import React, { useContext } from "react";

import classes from "./CartModal.module.css";
import FoodContext from "../../Context/FoodContext";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const CartModal = (props) => {
  const foodCtx = useContext(FoodContext);

  let totalAmount = 0;
  props.items.forEach((element) => {
    totalAmount += element.qty * element.price;
  });

  return (
    <div className={classes.container}>
      <div className={classes.ul}>
        <ul>
          {props.items.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <h2>{item.name}</h2>
                  <p>${item.price}</p>
                  <span>x{item.qty}</span>
                </div>
                <div className={classes.actions}>
                  <button
                    type="button"
                    className={classes.minus}
                    onClick={() =>
                      foodCtx.dispatch({ type: "ITEM_MINUS", payload: item.id })
                    }
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className={classes.plus}
                    onClick={() =>
                      foodCtx.dispatch({ type: "ITEM_PLUS", payload: item.id })
                    }
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={classes.pricing}>
          <h2>Total amount</h2>
          <h2>{formatter.format(totalAmount)}</h2>
        </div>
        <div className={classes.buttons}>
          <button onClick={props.onClose} className={classes.btn}>
            Close
          </button>
          <button
            onClick={() => props.onOrder(props.items)}
            className={classes.btn}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
