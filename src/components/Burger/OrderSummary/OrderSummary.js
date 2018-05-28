import React from "react";
import classes from "./OrderSummary.css";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingKey => (
    <li key={ingKey} className={classes.Capitalized}>
      {ingKey} : {props.ingredients[ingKey]}
    </li>
  ));
  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with following ingredients :</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout ?</p>
    </React.Fragment>
  );
};
export default orderSummary;
