import React from "react";

export default function Textarea(props) {
  return (
    <>
      <textarea
        name="content"
        type="text"
        className="inputfield"
        placeholder={`Note here...`}
        value={props.content}
        onChange={props.handleChange}
      ></textarea>
    </>
  );
}
