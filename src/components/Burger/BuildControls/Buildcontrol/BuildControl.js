import React from "react";

import Classes from "./BuildControl.css";

const BuildControl = props => {
  return (
    <div className={Classes.BuildControl}>
      <div className={Classes.Label}>{props.label}</div>
      <button className={Classes.More} onClick={() => props.added(props.type)}>
        More
      </button>
      <button
        className={Classes.Less}
        onClick={() => props.removed(props.type)}
        disabled={props.disabled[props.type]}
      >
        Less
      </button>
    </div>
  );
};
export default BuildControl;
