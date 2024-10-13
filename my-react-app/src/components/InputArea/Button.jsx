import React from "react";

export default function Button(props) {
  return (
    <button type="submit" className="subBtn" onClick={props.handleClick}>
      {props.btnName}
    </button>
  );
}
