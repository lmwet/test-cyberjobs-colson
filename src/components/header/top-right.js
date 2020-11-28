import React from "react";
import ReactDOM from "react-dom";
import { Box, Button, Typography } from "@material-ui/core";

const TopRight = () => {
  return (
    <Box>
      <Typography variant="h6">
        <Button
          variant="contained"
          color="primary"
          disableElevation
          focusVisible={false}
        >
          Connexion
        </Button>
        <Button variant="outlined" color="primary">
          Recruteur
        </Button>
      </Typography>
    </Box>
  );
};

export default TopRight;
