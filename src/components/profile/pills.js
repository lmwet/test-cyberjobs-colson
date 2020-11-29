import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Button, Container } from "@material-ui/core";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
  pills: {
    borderRadius: 2,
  },
}));

const Pills = () => {
  const classes = useStyles();

  return (
    <Container size="lg">
      <Button className={classes.pills} variant="outlined" disabled>
        <Icon>bookmark</Icon>
        Non renseigné
      </Button>
      <Button className={classes.pills} variant="outlined" disabled>
        <Icon>map_marker</Icon> CDD - Disponible dans 1 à 3 mois
      </Button>
      <Button className={classes.pills} variant="outlined" disabled>
        <Icon>house</Icon> Maisons Lafitte (78)
      </Button>
      <Button className={classes.pills} variant="outlined" disabled>
        <Icon>money</Icon> 1500 à 3000€/Prime
      </Button>
      <Button className={classes.pills} variant="outlined" disabled>
        <Icon>alarm</Icon> Aucune
      </Button>
    </Container>
  );
};

export default Pills;
