import React from "react";
import { Button } from "@mui/material";

function EmptyButton(props) {
  return (
    <Button
      type={props.type}
      size={props.size}
      variant="outlined"
      onClick={props.onClick}
      startIcon={props.startIcon}
      sx={props.sx}
      style={{
        borderRadius: "11px",
        border: "1px solid #ED6B68",
        color: "#2A367E",
      }}
      starIcon={props.starIcon}
      disabled={props.disabled}
    >
      <b>{props.name}</b>
    </Button>
  );
}

export default EmptyButton;
