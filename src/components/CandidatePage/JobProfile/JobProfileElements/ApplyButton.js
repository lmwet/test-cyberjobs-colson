import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Fab, Typography, Card, CardContent } from "@material-ui/core";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

const useStyles = makeStyles((theme) => ({
  candidater: {
    backgroundColor: "#f4d47d",
    color: theme.palette.text.secondary,
    textTransform: "none",
    pointerEvents: "pointer",
  },
  infobox: {
    position: "absolute",
    left: "28vw",
    marginTop: "60px",
    zIndex: 1000000000000000,
    flexDirection: "column",
    width: "12vw",
    padding: theme.spacing(2),
    backgroundColor: " #fff",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    boxShadow: "0 0 15px rgba(10,40,100,.1)",
    cursor: "pointer",
  },
  icon: {
    padding: "10px",
  },
}));

const ApplyButton = () => {
  const [isShown, setIsShown] = useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <Fab
          variant="extended"
          className={classes.candidater}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          Envoyer ma candidature <DescriptionOutlinedIcon />
        </Fab>
      </Box>
      {isShown && (
        <Card className={classes.infobox} id="apply-button-infobox">
          <CardContent>
            <Typography variant="subtitle2" color="primary">
              <Box className={classes.icon}>
                <DescriptionOutlinedIcon color="action" fontSize="large" />
              </Box>
              Soumettre ma candidature directement à l'entreprise
            </Typography>
          </CardContent>
        </Card>
      )}
    </React.Fragment>
  );
};

export default ApplyButton;
