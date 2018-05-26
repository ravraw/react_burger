import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from "./Burger.css";

const burger = props => {
  let ingredientsNames = Object.keys(props.ingredients).map(ingKey => {
    return [...Array(props.ingredients.ingKey)].map((_, i) => {
      return <BurgerIngredient key={ingKey + i} type={ingKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsNames}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
