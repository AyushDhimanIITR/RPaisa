import React from "react";
import Stack from "@mui/material/Stack";
import "./Name.css";
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

function Name(props) {
  return (
    <Stack className="A" spacing={3} direction="row">
      <span id="ab">
        <img src={props.img} alt="user-identity" height={25} width={25} />
      </span>
      <span id="bc">
        <div>
          <h2>
            {" "}
            Hi,{props.name} <Emoji symbol="✨" />
          </h2>
        </div>
        <div>
          <h5>Let's save your money</h5>
        </div>
      </span>
    </Stack>
  );
}
export default Name;
