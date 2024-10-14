import React, { useState } from "react";
import Heading from "./components/Heading";
import Form from "./components/InputArea/Form";
import Output from "./components/OutputArea/OutputList";
import "./style/App.css";

function App() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [notesList, setNotesList] = useState([]);

  const [isExpand, setIsExpand] = useState(false);

  function handleChange(event) {
    let [name, value] = [event.target.name, event.target.value];
    setNote((previous) => {
      return { ...previous, [name]: value };
    });
    event.preventDefault();
  }

  function handleClick(event) {
    setNotesList((previous) => {
      return [...previous, note];
    });

    handleAfterSubmitDone();

    event.preventDefault();
  }

  function handleAfterSubmitDone() {
    setNote(() => {
      return { title: "", content: "" };
    });
  }

  function handleDeleteNote(id) {
    setNotesList((previous) => {
      return previous.filter((ele, index) => {
        return index !== id;
      });
    });
    console.log("deletion done..");
  }

  function handleIsExpand() {
    setIsExpand(() => {
      return true;
    });
  }

  return (
    <div>
      <div className="part-1 dis-flex">
        <Heading />
        <Form
          labelStatement="INPUT NOTE HERE"
          btnName="Add"
          note={note}
          isExpand={isExpand}
          handleChange={handleChange}
          handleClick={handleClick}
          handleIsExpand={handleIsExpand}
        />
      </div>
      <div className="part-2">
        <Output listOfNote={notesList} handleDeleteNote={handleDeleteNote} />
      </div>
    </div>
  );
}

export default App;
