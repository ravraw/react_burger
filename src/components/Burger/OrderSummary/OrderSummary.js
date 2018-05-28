import React from "react";
import classes from "./OrderSummary.css";

import Button from "../../UI/Button/Button";

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
      <Button clicked={props.purchaseCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </React.Fragment>
  );
};
export default orderSummary;
