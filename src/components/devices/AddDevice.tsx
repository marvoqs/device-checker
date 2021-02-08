import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addDevice } from '../../actions/device';

// Material-UI
import { Button, Container, FormControl, Input, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formItem: {
      margin: theme.spacing(3, 0, 0),
    },
    paper: {
      padding: theme.spacing(2, 2, 1),
    },
  })
);

const AddDevice: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState<DeviceFormData>({
    code: '',
    image: '',
    model: '',
    os: '',
    osVersion: '',
    vendor: '',
  });

  const handleChange = (e: React.ChangeEvent<{ value: unknown; name?: string }>): void => {
    setFormData((formData: DeviceFormData) => ({ ...formData, [e.target.name as keyof typeof formData]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addDevice(formData));
    history.push('/');
  };

  return (
    <Container maxWidth='sm'>
      <Paper className={classes.paper}>
        <Typography variant='h5'>Nové zařízení</Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel id='code'>Kódové označení (identifikátor)</InputLabel>
            <Input className={classes.formItem} fullWidth id='code' name='code' onChange={handleChange} required type='text' value={formData.code} />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='vendor'>Výrobce</InputLabel>
            <Input className={classes.formItem} fullWidth id='vendor' name='vendor' onChange={handleChange} required type='text' value={formData.vendor} />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='model'>Model</InputLabel>
            <Input className={classes.formItem} fullWidth id='model' name='model' onChange={handleChange} required type='text' value={formData.model} />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='os'>Operační systém</InputLabel>
            <Select className={classes.formItem} fullWidth id='os' name='os' onChange={handleChange} required value={formData.os}>
              <MenuItem value='ANDROID'>ANDROID</MenuItem>
              <MenuItem value='IOS'>IOS</MenuItem>
              <MenuItem value='WINDOWS'>WINDOWS</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='osVersion'>Verze operačního systému</InputLabel>
            <Input
              className={classes.formItem}
              fullWidth
              id='osVersion'
              name='osVersion'
              onChange={handleChange}
              placeholder='Verze operačního systému'
              required
              type='text'
              value={formData.osVersion}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='image'>Obrázek (URL)</InputLabel>
            <Input className={classes.formItem} fullWidth id='image' name='image' onChange={handleChange} type='text' value={formData.image} />
          </FormControl>
          <Button className={classes.formItem} color='primary' fullWidth size='small' type='submit' variant='contained'>
            Přidat zařízení
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddDevice;
