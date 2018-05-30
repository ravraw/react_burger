import React, { Component } from "react";
import classes from "./OrderSummary.css";

import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  ComponentWillUpdate() {
    console.log("[OrderSummary] willupdate");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      ingKey => (
        <li key={ingKey} className={classes.Capitalized}>
          {ingKey} : {this.props.ingredients[ingKey]}
        </li>
      )
    );
    return (
      <React.Fragment>
        <h3>Your order</h3>
        <p>A delicious burger with following ingredients :</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout ?</p>
        <Button clicked={this.props.purchaseCancelled} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">
          CONTINUE
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
