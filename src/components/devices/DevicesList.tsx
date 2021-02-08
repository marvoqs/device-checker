import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDevices } from '../../actions/device';

// Components
import DeviceItem from './DeviceItem';
import FilterDevices from './FilterDevices';
import Spinner from '../layout/Spinner';

// Material-UI
import { Container, Grid } from '@material-ui/core';

const DevicesList: FC = () => {
  const dispatch = useDispatch();
  const { devices, loading } = useSelector((state: StateType) => state.device);
  const filter = useSelector((state: StateType) => state.filter);

  const results = devices.filter(
    (device) =>
      (filter.os === '' || device.os === filter.os) &&
      (filter.vendor === '' || device.vendor === filter.vendor) &&
      (filter.available === false || (!device.borrowed && filter.available)) &&
      (filter.model === '' || device.model?.toLowerCase().includes(filter.model.toLowerCase()))
  );

  useEffect(() => {
    dispatch(getDevices());
  }, [dispatch]);

  return (
    <Container>
      <FilterDevices />
      {loading ? (
        <Spinner />
      ) : (
        <Grid container spacing={2}>
          {results.map((device) => (
            <DeviceItem key={device.id} device={device} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default DevicesList;
