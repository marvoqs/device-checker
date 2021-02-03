import React from 'react';

// Material-UI Components
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const TopBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            deviceChecker
          </Typography>
          <Button size='small' variant='contained'>
            Přihlásit
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
