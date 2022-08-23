import React from "react";
import { CssBaseline, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from './styles'

export default function AddItemIcon({handleOpenAddItem}) {
  const classes = useStyles();

  const addItemFn = () => {
    if(typeof handleOpenAddItem == "function"){
      handleOpenAddItem();
    }
  }

  return (
    <Fab color="primary" aria-label="add" className={classes.fab} onClick={addItemFn}>
      <AddIcon />
    </Fab>
  );
}
