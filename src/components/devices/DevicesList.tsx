import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDevices } from '../../actions/device';

// Components
import DeviceItem from './DeviceItem';
import Spinner from '../layout/Spinner';

// Material-UI
import { Container, Grid } from '@material-ui/core';

const DevicesList: React.FC = () => {
  const dispatch = useDispatch();
  const { devices, loading } = useSelector((state: StateType) => state.device);

  useEffect(() => {
    dispatch(getDevices());
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <Grid container spacing={2}>
          {devices.map((device) => (
            <DeviceItem key={device.id} device={device} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default DevicesList;
