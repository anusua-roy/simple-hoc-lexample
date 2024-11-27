import { useEffect, useState } from "react";
import withLogger from "./withLogger";

const Counter = ({ counter }) => {
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
};

export default withLogger(Counter, "Counter");
