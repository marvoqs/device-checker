import React from 'react';

import { Box, CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      textAlign: 'center',
    },
  })
);

const Spinner: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <CircularProgress color='secondary' />
    </Box>
  );
};

export default Spinner;
