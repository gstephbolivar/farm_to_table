import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Toolbar, Typography, Button, AppBar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDropdown from "../../components/MenuDropdown/MenuDropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuDropdown/>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
