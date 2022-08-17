import React from "react";
import { makeStyles, alpha } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#1976d2",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    minWidth: "200px",
  },
  appbar: {
    position: "static",
    backgroundColor: "#1976d2",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  boxMenu: {
    color: "white",
    flexGrow: 1,
  },
  boxMenuList: {
    justifyContent: "space-between",
    maxWidth: "250px",
    display: "flex",
  },
  button: {
    color: "white",
    fontWeight: "bold",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
