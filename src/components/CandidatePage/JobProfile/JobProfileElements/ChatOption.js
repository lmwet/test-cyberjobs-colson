import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Container, Fab } from "@material-ui/core";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";

const useStyles = makeStyles((theme) => ({
  candidater: {
    backgroundColor: "#f4e47d",
    color: theme.palette.text.primary,
  },
}));

const ChatOption = () => {
  const classes = useStyles();

  return (
    <Box>
      <Fab variant="extended" className={classes.candidater}>
        Chat entreprise <ChatOutlinedIcon />
      </Fab>
    </Box>
  );
};

export default ChatOption;
