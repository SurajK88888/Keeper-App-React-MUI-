import React from "react";
import Li from "./Li";

export default function Output(props) {
  let notes = props.listOfNote;
  return (
    <div className="box">
      <ul className="listContainer">
        {notes
          .filter((note, index) => {
            return note.title !== "" && note.content !== "";
          })
          .map((note, index) => {
            return (
              <Li
                key={index + "1a"}
                id={index}
                note={note}
                handleDeleteNote={props.handleDeleteNote}
              />
            );
          })}
      </ul>
    </div>
  );
}
