import React from 'react';

// Material-UI
import { Card, CardMedia, Grid } from '@material-ui/core';

const DeviceItem: React.FC<any> = ({ device }) => {
  return (
    <Grid item key={device.id} lg={2} md={3} sm={4} xs={6}>
      <Card>
        <CardMedia component='img' alt='Contemplative Reptile' image={device.image} title='Contemplative Reptile' />
      </Card>
    </Grid>
  );
};

export default DeviceItem;
