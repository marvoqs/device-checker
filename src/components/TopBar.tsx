import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkButton: {
      textDecoration: 'none',
    },
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
          <Typography className={classes.title} variant='h6'>
            deviceChecker
          </Typography>
          <Link className={classes.linkButton} to='/login'>
            <Button size='small' variant='contained'>
              Přihlásit
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
