import React, { useState } from 'react';
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

const AddDevice: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<DeviceFormData>({
    code: '',
    image: '',
    model: '',
    os: '',
    osVersion: '',
    vendor: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((formData: DeviceFormData) => ({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFormData((formData: DeviceFormData) => ({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addDevice(formData));
  };

  return (
    <Container maxWidth='sm'>
      <Paper className={classes.paper}>
        <Typography variant='h5'>Nové zařízení</Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel id='code'>Kódové označení (identifikátor)</InputLabel>
            <Input className={classes.formItem} fullWidth id='code' name='code' onChange={handleInputChange} required type='text' value={formData.code} />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='vendor'>Výrobce</InputLabel>
            <Input className={classes.formItem} fullWidth id='vendor' name='vendor' onChange={handleInputChange} required type='text' value={formData.vendor} />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='model'>Model</InputLabel>
            <Input className={classes.formItem} fullWidth id='model' name='model' onChange={handleInputChange} required type='text' value={formData.model} />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='os'>Operační systém</InputLabel>
            <Select className={classes.formItem} fullWidth id='os' name='os' onChange={handleSelectChange as any} required value={formData.os}>
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
              onChange={handleInputChange}
              placeholder='Verze operačního systému'
              required
              type='text'
              value={formData.osVersion}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='image'>Obrázek (URL)</InputLabel>
            <Input className={classes.formItem} fullWidth id='image' name='image' onChange={handleInputChange} type='text' value={formData.image} />
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
