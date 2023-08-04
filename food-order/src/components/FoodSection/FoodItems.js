import React, { useReducer } from "react";

import classes from "./FoodItems.module.css";

import Form from "../Form/Form";

const FoodData = [
  {
    id: "1",
    name: "Sushi",
    desc: "Finnest fish and veggies",
    price: 22.99,
  },
  {
    id: "2",
    name: "Burger",
    desc: "American, Raw, Meaty",
    price: 18.99,
  },
];

const orderReducer = (state, action) => {
  if(action.type === 'ADD_QTY'){
    return [...state, {...action.payload}];
  }
}

const FoodItems = (props) => {
  const [order,dispatchOrder] = useReducer(orderReducer,[]);

  const submitHandler = (id,qty) => {
    const foodItem = FoodData.find((food) => food.id === id);
    const newItem = {...foodItem,qty:qty};
    dispatchOrder({type:'ADD_QTY',payload: newItem});
  }
  return (
    <div className={classes["items-container"]}>
      {FoodData.map((food) => {
        return (
          <div className={classes.container} key={food.id}>
            <div className={classes.items}>
              <h1>{food.name}</h1>
              <p>{food.desc}</p>
              <h2>${food.price}</h2>
            </div>
            <Form onSubmit={submitHandler} id={food.id}></Form>
          </div>
        );
      })}
    </div>
  );
};

export default FoodItems;
