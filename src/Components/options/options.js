import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./options.css";
import {
  SendFill,
  Coin,
  CreditCard2FrontFill,
  Sliders2Vertical,
} from "react-bootstrap-icons";
import Stack from "@mui/material/Stack";

function Options() {
  return (
    <Stack className="one" spacing={3} direction="column">
      <Button size="lg" variant="info">
        <SendFill /> Send
      </Button>

      <Button size="lg" variant="info">
        <CreditCard2FrontFill /> Receive
      </Button>
      <Button size="lg" variant="info">
        <Coin /> Pay
      </Button>
      <Button size="lg" variant="info">
        <Sliders2Vertical /> Others
      </Button>
    </Stack>
  );
}

export default Options;
