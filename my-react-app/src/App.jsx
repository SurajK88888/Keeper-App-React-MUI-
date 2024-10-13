import React, { useState } from "react";
import Heading from "./components/Heading";
import Form from "./components/InputArea/Form";
import Output from "./components/OutputArea/OutputList";
import "./style/App.css";

function App() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [notesList, setNotesList] = useState([]);

  function handleChange(event) {
    let [name, value] = [event.target.name, event.target.value];
    setNote((previous) => {
      return { ...previous, [name]: value };
    });
    console.log(note);
    event.preventDefault();
  }

  function handleClick(event) {
    setNotesList((previous) => {
      return [...previous, note];
    });
    console.log(...notesList);
    event.preventDefault();
  }

  function handleDeleteNote(id) {
    setNotesList((previous) => {
      return previous.filter((ele, index) => {
        return index !== id;
      });
    });
    console.log("deletion done..");
  }

  return (
    <div>
      <div className="part-1 dis-flex">
        <Heading />
        <Form
          labelStatement="INPUT NOTE HERE"
          btnName="Add"
          note={note}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </div>
      <div className="part-2">
        <Output listOfNote={notesList} handleDeleteNote={handleDeleteNote} />
      </div>
    </div>
  );
}

export default App;
