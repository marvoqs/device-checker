import React, { FC } from 'react';

//Material-UI
import { Box, CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      textAlign: 'center',
    },
  })
);

const Spinner: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <CircularProgress color='secondary' />
    </Box>
  );
};

export default Spinner;
