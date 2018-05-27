import React from "react";

import BuildControl from "./Buildcontrol/BuildControl";

import Classes from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={Classes.BuildControls}>
      <p>Total Price : {props.price}</p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            type={ctrl.type}
            label={ctrl.label}
            added={props.ingredientAdded}
            removed={props.ingredientRemoved}
            disabled={props.disabled}
          />
        );
      })}
    </div>
  );
};
export default BuildControls;
