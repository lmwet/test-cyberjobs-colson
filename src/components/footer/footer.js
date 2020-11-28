import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { DataGrid, RowsProp, ColDef } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(4),
    backgroundColor: "#3b3e47",
    fontSize: "0.8rem",
    color: "white",
    height: 300,
    width: "100%",
  },
}));

const rows: RowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "XGrid", col2: "is Awesome" },
  {
    id: 3,
    col1: "  © Copyright 2020 - Tous droits réservés Cyberjobs.fr",
    col2: "is Amazing",
  },
];

const columns: ColDef[] = [
  { field: "id", hide: true },
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <DataGrid className={classes.footer} rows={rows} columns={columns} />
    </Box>
  );
};

export default Footer;
