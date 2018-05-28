import React from "react";
import classes from "./Modal.css";
const modal = props => {
  return <div className={classes.Modal}>{props.childern}</div>;
};
export default modal;
