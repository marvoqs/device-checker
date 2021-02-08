import React, { FC, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../actions/auth';

// Material-UI
import { Button, Container, Input, Paper, Typography } from '@material-ui/core';
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

interface FormData {
  login: string;
  password: string;
}

const Login: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: StateType) => state.auth);
  const [formData, setFormData] = useState<FormData>({
    login: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((formData) => ({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(login(formData.login, formData.password));
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Container maxWidth='sm'>
      <Paper className={classes.paper}>
        <Typography variant='h5'>Přihlášení</Typography>
        <Typography color='secondary' variant='body2'>
          Po přihlášení si budeš moct půjčit telefon, případně vložit nový do seznamu.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Input
            className={classes.formItem}
            fullWidth
            name='login'
            onChange={handleChange}
            placeholder='Přihlašovací jméno'
            required
            type='text'
            value={formData.login}
          />
          <Input
            className={classes.formItem}
            fullWidth
            name='password'
            onChange={handleChange}
            placeholder='Heslo'
            required
            type='password'
            value={formData.password}
          />
          <Button className={classes.formItem} color='primary' fullWidth size='small' type='submit' variant='contained'>
            Přihlásit se
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
