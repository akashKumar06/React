import React, { useState } from "react";
import classes from "./Form.module.css";

import Button from "./Button";

const Form = (props) => {
  const [qty, setQty] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(props.id, qty);
  };

  const changeHandler = (event) => {
    setQty(event.target.value);
  };
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="qty"
          name="qty"
          min="0"
          max="5"
          value={qty}
          onChange={changeHandler}
        />
      </div>
      <Button type="submit">+Add</Button>
    </form>
  );
};

export default Form;
