import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.actions}>
      <button type={props.type}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
