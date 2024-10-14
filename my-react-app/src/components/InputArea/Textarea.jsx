import React from "react";

export default function Textarea(props) {
  return (
    <>
      <textarea
        name="content"
        type="text"
        rows="1"
        className="inputfield"
        placeholder={`Note here...`}
        value={props.content}
        onChange={props.handleChange}
      ></textarea>
    </>
  );
}
