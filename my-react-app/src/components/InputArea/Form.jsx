import React from "react";
import Label from "./Label";
import Textarea from "./Textarea";
import Button from "./Button";
import Input from "./Input";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

export default function Form(props) {
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }
  return (
    <form className="inputForm dis-flex">
      <Label labelStatement={props.labelStatement} />
      <Input handleChange={props.handleChange} title={props.note.title} />
      <Textarea
        handleChange={props.handleChange}
        content={props.note.content}
      />
      <Button btnName={props.btnName} handleClick={props.handleClick} />
    </form>
  );
}
