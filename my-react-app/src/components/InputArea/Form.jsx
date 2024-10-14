import React, { useState } from "react";
import Label from "./Label";
import Textarea from "./Textarea";
import Button from "./Button";
import Input from "./Input";

export default function Form(props) {
  return (
    <form className="inputForm dis-flex">
      <Label labelStatement={props.labelStatement} />
      <Input
        handleIsExpand={props.handleIsExpand}
        handleChange={props.handleChange}
        title={props.note.title}
      />
      {props.isExpand ? (
        <>
          <Textarea
            handleChange={props.handleChange}
            content={props.note.content}
          />
          <Button btnName={props.btnName} handleClick={props.handleClick} />
        </>
      ) : (
        ""
      )}
    </form>
  );
}
