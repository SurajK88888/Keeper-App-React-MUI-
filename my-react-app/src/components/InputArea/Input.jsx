import React from "react";

export default function Input(props) {
  return (
    <input
      name="title"
      type="text"
      className="titleInput"
      placeholder="Title..."
      value={props.title}
      onChange={props.handleChange}
      onClick={props.handleIsExpand}
    />
  );
}
