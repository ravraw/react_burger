import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from "./Burger.css";

const burger = props => {
  let ingredientsNames = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (ingredientsNames.length === 0) {
    ingredientsNames = <p>Please start adding ingredients...</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsNames}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
