import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Container, Fab } from "@material-ui/core";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

const useStyles = makeStyles((theme) => ({
  candidater: {
    backgroundColor: "#f4d47d",
    color: theme.palette.text.primary,
  },
}));

const ApplyButton = () => {
  const classes = useStyles();

  return (
    <Box>
      <Fab variant="extended" className={classes.candidater}>
        envoyer ma candidature <DescriptionOutlinedIcon />
      </Fab>
    </Box>
  );
};

export default ApplyButton;
