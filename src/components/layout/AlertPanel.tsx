import React, { FC } from 'react';
import { useSelector } from 'react-redux';

// Material-UI
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const AlertPanel: FC = () => {
  const alert = useSelector((state: StateType) => state.alert);

  return (
    <>
      {alert && (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open>
          <Alert variant='filled' severity={alert.type}>
            {alert.msg}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default AlertPanel;
