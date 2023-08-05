import React, { useContext} from "react";

import classes from "./FoodItems.module.css";
import FoodContext from "../../Context/FoodContext";
import Form from "../Form/Form";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const FoodItems = (props) => {
  const foodCtx = useContext(FoodContext);

  const submitHandler = (id, qty) => {
    foodCtx.dispatch({ type: "ADD_QTY", payload: {id:id,qty:qty}});
  };

  return (
    <div className={classes["items-container"]}>
      {props.FoodData.map((food) => {
        return (
          <div className={classes.container} key={food.id}>
            <div className={classes.items}>
              <h1>{food.name}</h1>
              <p>{food.desc}</p>
              <h2>{formatter.format(food.price)}</h2>
            </div>
            <Form onSubmit={submitHandler} id={food.id}></Form>
          </div>
        );
      })}
    </div>
  );
};

export default FoodItems;
