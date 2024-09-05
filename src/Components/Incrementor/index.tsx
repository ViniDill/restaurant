import React, { useState } from "react";
import { Button, Box } from "@mui/material";

function Incrementor() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      {count > 0 ? (
        <>
          <Button
            onClick={handleDecrement}
            sx={{ fontSize: "24px", color: "black" }}
          >
            -
          </Button>
          <Box mx={2} sx={{ color: "black" }}>
            {count}
          </Box>
        </>
      ) : null}
      <Button
        onClick={handleIncrement}
        sx={{ fontSize: "24px", color: "black" }}
      >
        +
      </Button>
    </Box>
  );
}

export default Incrementor;
