import React, {useReducer } from "react";

import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import FoodSection from "./components/FoodSection/FoodSection";
import FoodContext from "./Context/FoodContext";

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
  if (action.type === "ADD_QTY") {
    const foodItem = FoodData.find((food) => food.id === action.payload.id);
    const newItem = { ...foodItem, qty: +action.payload.qty };
    return [...state, newItem];
  }
};

function App() {
  const [order, dispatchOrder] = useReducer(orderReducer, []);

  return (
    <React.Fragment>
      <FoodContext.Provider value={{ order: order, dispatch: dispatchOrder }}>
        <Header></Header>
        <Content></Content>
        <FoodSection foodData={FoodData}></FoodSection>
      </FoodContext.Provider>
    </React.Fragment>
  );
}

export default App;
