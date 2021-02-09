import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { borrowDevice, returnDevice } from '../../actions/device';

// Images
import noimage from '../../img/noimage.jpg';

// Material-UI
import { Box, Button, Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      textAlign: 'center',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    grid: {
      display: 'flex',
    },
  })
);

interface IProps {
  device: DeviceType;
}

const DeviceItem: FC<IProps> = ({ device }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector((state: StateType) => state.auth);
  return (
    <Grid className={classes.grid} item key={device.id} lg={2} md={3} sm={4} xs={6}>
      <Card className={classes.card}>
        <CardContent>
          <Box className={classes.box}>
            <img alt={device.model} src={device.image ? device.image : noimage} style={{ margin: '0 auto', height: '6rem' }} title={device.model} />
          </Box>
          <Typography variant='h6'>{device.model}</Typography>
          <Typography variant='subtitle2'>{device.vendor}</Typography>
          <Typography variant='subtitle2'>
            {device.os} / {device.osVersion}
          </Typography>
        </CardContent>
        <CardActionArea>
          {device.borrowed && device.borrowed.user.id === user?.id ? (
            <Button color='primary' fullWidth size='small' onClick={() => dispatch(returnDevice(device.id))} variant='contained'>
              Vrátit
            </Button>
          ) : (
            <Button
              color='primary'
              disabled={device.borrowed ? true : false}
              fullWidth
              size='small'
              onClick={() => dispatch(borrowDevice(device.id))}
              variant='contained'>
              Půjčit
            </Button>
          )}
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default DeviceItem;
