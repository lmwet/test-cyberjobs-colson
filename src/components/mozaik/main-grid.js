import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Container,
  Typography,
  Card,
  CardMedia,
} from "@material-ui/core";
import Otherjobs from "./other-jobs";

const useStyles = makeStyles((theme) => ({
  spacing: 8,

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
    color: theme.palette.text.primary,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  blue: {
    padding: theme.spacing(2),
    textAlign: "justify",
    backgroundColor: "#3eb8fd",
    color: "white",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  text: {
    color: theme.palette.text.secondary,
  },
}));

const MainGrid = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.row}>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.blue}>
            La Marine nationale est une des composantes des forces armées et
            dépend du ministère des armées. Elle est engagée en permanence sur
            toutes les mers du monde.
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
            <Typography
              className={classes.text}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Descriptif de l'offre
            </Typography>
            <Typography className={classes.text} variant="caption">
              La Direction Interarmées des Réseaux d’Infrastructure et des
              Systèmes d’Information (DIRISI) est l’opérateur des systèmes
              d’information et de communication (SIC) des Armées. Le Service
              Desk (SDK) est le point d'entrée unique des demandes de service
              (incident et/ou demande de catalogue) des abonnés du ministère des
              Armées. Répartie physiquement sur quatre sites géographiques
              (Maisons-Laffitte, Metz, Rennes et Toulon), cette entité unique et
              globale dispose d’une capacité de traitement sur l’ensemble de la
              métropole et s’appuie sur des centres de services DIRISI «
              physiques », multi-localisés sur le territoire national. Le SDK
              assure un service en H24, 7j/7 et met tout en oeuvre pour
              améliorer la qualité de service offerte par la DIRISI aux
              différentes directions et services du ministère. Activités
              principales : Le titulaire est responsable de la cellule
              conduite-coordination du SDK Ile de France situé à
              Maisons-Laffitte, il assure un rôle transverse tout en veillant à
              la coordination avec l’ensemble des acteurs internes et externes.
              En charge de l'animation du briefing quotidien, il assure : - Le
              pilotage transverse entre les FO (Front Office) et BO (Back
              Office) ; - La bonne application des directives internes et celles
              liées au SMS (système de management de la sécurité) ; - La
              coordination avec les autres SDK ainsi qu’avec les autres acteurs
              industriels ou techniciens de la DIRISI (CNMO « centre nationaux
              de mise en oeuvre » ; COD « centre opérationnel de la DIRISI »,
              CIRISI « centre interarmées des réseaux d’infrastructure et des
              systèmes d’information », …). Responsable de la gestion des
              indicateurs locaux avec le back office, il veille au contrôle
              qualité des procédures.
            </Typography>
            <Typography
              className={classes.text}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Profil recherché
            </Typography>
            <Typography className={classes.text} variant="caption">
              Profil recherché - Master 1 ou 2 dans l’informatique générale ; -
              Maitrise d’outils bureautiques sous WINDOWS avec utilisation des
              outils métiers tels que : DIADEME (ticketing) – SCCM (system
              center configuration manager) – SVI (serveur vocal interactif)
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={15} sm={9}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt="grid-images"
            height="175"
            image="/images/imagesGrid.png"
            title="Grid"
          />
        </Card>
      </Grid>
      <Otherjobs />
    </Container>
  );
};

export default MainGrid;
