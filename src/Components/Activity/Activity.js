import React, { useState } from "react";
import "./activity.css";
//import Stack from "@mui/material/Stack";

function Activity(props) {
  return (
    <div>
      <div className="att">
        <h4>Your required sum is &nbsp; </h4>

        <h2> ${props.sum || "54"} </h2>

        <h4> &nbsp; as of by</h4>

        <h3>{props.date}</h3>
      </div>
      {/* <div className="act">
        <Stack spacing={6} direction="row">
          <h4>Your required sum is</h4>
          <h2>{props.sum}</h2>
          <h4>as of by</h4>
          <h3>{props.date}</h3>
        </Stack>
      </div> */}
    </div>
  );
}

export default Activity;