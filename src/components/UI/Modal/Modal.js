import React from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "tarnslateY(0)" : "translateY(-100)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};
export default modal;
