import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../actions/auth';

// Material-UI
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
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

const TopBar: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: StateType) => state.auth);
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h6'>
            <Link to='/'>deviceChecker</Link>
          </Typography>
          {isAuthenticated ? (
            <>
              <Button onClick={() => dispatch(logout() as any)} size='small' variant='contained'>
                Odhlásit
              </Button>
              {user?.type === 'admin' && (
                <Link className={classes.linkButton} to='/add'>
                  <Button size='small' variant='contained'>
                    Přidat zařízení
                  </Button>
                </Link>
              )}
            </>
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
