import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../actions/auth';

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
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: StateType) => state.auth);
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h6'>
            deviceChecker
          </Typography>
          {isAuthenticated ? (
            <Button onClick={() => dispatch(logout() as any)} size='small' variant='contained'>
              Odhlásit
            </Button>
          ) : (
            <Link className={classes.linkButton} to='/login'>
              <Button size='small' variant='contained'>
                Přihlásit
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
