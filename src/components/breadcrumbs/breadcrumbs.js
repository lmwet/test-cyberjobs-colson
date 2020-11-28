import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Breadcrumbs, Container } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  breadcrumbsContainer: {
    padding: theme.spacing(4),
  },
  text: {
    fontSize: "0.8rem",
  },
}));

const BreadcrumbsNav = () => {
  const classes = useStyles();

  return (
    <Container className={classes.breadcrumbsContainer} maxWidth="lg">
      <Breadcrumbs className={classes.text} aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Accueil
        </Link>
        <Link color="inherit" href="/">
          Entreprises
        </Link>
        <Link color="inherit" href="/">
          Marine nationale
        </Link>
        <Typography className={classes.text} color="textPrimary">
          Coordinateur service informatique
        </Typography>
      </Breadcrumbs>
    </Container>
  );
};

export default BreadcrumbsNav;
