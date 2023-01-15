import React from "react";
import Stack from "@mui/material/Stack";
import "./Name.css";
function Name(props) {
  const Emoji = (props) => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );

  return (
    <Stack className="A" spacing={1} direction="column">
      {/* <span id="ab">
        <img src={props.img} alt="user-identity" height={25} width={25} />
      </span>
      <span id="bc"> */}
        <div >
          <h2>
            
            Hi, {props.name} <Emoji symbol="✨" />
          </h2>
        </div>
        <div>
          <h5>Let's ease the transactions</h5>
        </div>
      
    </Stack>
  );
}
export default Name;