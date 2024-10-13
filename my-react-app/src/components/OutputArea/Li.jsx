import React from "react";

export default function Li(props) {
  let noteValue = props.note;
  return (
    <li>
      {noteValue.title}
      <br />
      {noteValue.content}
      <button
        type="button"
        onClick={() => {
          return props.handleDeleteNote(props.id);
        }}
        className="delbtn"
      >
        delete...
      </button>
    </li>
  );
}
