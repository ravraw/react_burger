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
      {controls.map(ctrl => {
        return (
          <BuildControl key={ctrl.label} type={ctrl.type} label={ctrl.label} />
        );
      })}
    </div>
  );
};
export default BuildControls;
