import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import "./Card.css";

function Card(props) {
  return (
    <div className="Rcard">
      <Stack spacing={7} direction="row">
        <span>
          <h2>Rpaisa</h2>
        </span>
        <span>
          <div>
            <h5>Current Balance</h5>
          </div>
          <div>
            {/* <h2>props.currentbalance</h2> */}
            <h2>{props.currentbalance}</h2>
          </div>
        </span>
      </Stack>

      <div>
        <div>
          {/* <h3>props.enrollmentno</h3> */}
          <h3>{props.enrollmentno}</h3>
        </div>
        <div>
          {/* <h4>props.name</h4> */}
          <h4>{props.name}</h4>
        </div>
      </div>
    </div>
  );
}
export default Card;
