import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";

import {
  Paper,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spacing: 8,
  root: {
    flexGrow: 1,
  },
  cardGrid: {
    padding: theme.spacing(2),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  cardMedia: {
    paddingTop: "56.25%",
    padding: theme.spacing(2),
  },
  cardContent: {
    flexGrow: 1,
  },
  h6: {
    color: theme.palette.text.primary,
  },
}));

const OtherJobs = ({ otherJobs }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root} maxWidth="lg">
      <Grid item xs={6} sm={3}></Grid>
      <Grid item xs={12} sm={9}>
        <Paper className={classes.cardGrid}>
          <Typography variant="h6" className={classes.h6}>
            Autres Jobs
          </Typography>
          <Grid container spacing={6}>
            {otherJobs.map((job) => (
              <Grid item key={job} xs={15} sm={9} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={job.imgUrl}
                    title={job.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {job.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="secondary" disabled>
                      <Icon>{job.icon}</Icon> {job.caption}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OtherJobs;
