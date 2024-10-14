import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

export default function Button(props) {
  return (
    <Zoom in={true}>
      <Fab type="submit" className="subBtn" onClick={props.handleClick}>
        {/* {props.btnName} */}
        <AddBoxIcon />
      </Fab>
    </Zoom>
  );
}
