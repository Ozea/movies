import { AccountCircle, Facebook, Instagram, Twitter, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grow, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { GridContainer } from "components";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  formContainer: {
    backgroundColor: '#1f2739e6',
    borderRadius: '5px',
    zIndex: '2'
  },
  form: {
    margin: theme.spacing(2)
  },
  forgotPassword: {
    textTransform: 'initial',
    color: '#F2AA4Cff',
    border: '1px solid #F2AA4Cff',
    flex: '1 1 auto',
    "&:hover": {
      background: '#f2aa4c4a',
      border: '1px solid #F2AA4Cff',
    }
  },
  signIn: {
    color: 'white',
    border: '1px solid white',
    background: 'transparent',
    "&:hover": {
      border: '1px solid #white',
    }
  },
  textInput: {
    "& label": {
      color: 'white !important'
    },
    "& fieldset": {
      border: '1px solid white !important',
    }
  }
}));

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 200);
  }, []);

  useEffect(() => {
    const { email, password } = formValues;

    let emailError = '';
    let passwordError = '';

    if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      emailError = 'Invalid email.';
    }

    if (!email) {
      emailError = 'Email is required.';
    }

    if (!password) {
      passwordError = 'Password is required.';
    }

    if (password.length < 6) {
      passwordError = 'Password should be 6 characters long at least.';
    }

    setFormErrors({ ...formErrors, email: emailError, password: passwordError });
  }, [formValues]);

  useEffect(() => {
    setFormErrors({ email: '', password: '' });
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  const onFormSubmit = event => {
    event.preventDefault();

    const { email, password } = formErrors;

    if (!email && !password) {
      history.push('/');
    }
  }

  const icon = (
    <Paper sx={{ m: 1 }} className={classes.formContainer} elevation={4}>
      <form className={classes.form} onSubmit={onFormSubmit}>
        <GridContainer
          justifyContent="center"
          sx={{ marginTop: '-2.5rem', background: 'white', p: 2.25, borderRadius: 1 }}
          style={{ width: '80%', margin: '-2.5rem auto 0' }}>
          <Typography
            variant="h5"
            align="center"
            color="secondary.dark">Sign in</Typography>
        </GridContainer>
        <GridContainer direction="column" marginTop={2} padding={2} style={{ width: '330px' }}>
          <FormControl>
            <TextField
              error={Boolean(formErrors.email)}
              helperText={formErrors.email}
              id="outlined-error-helper-text"
              label="Email"
              className={classes.textInput}
              onChange={handleChange('email')}
              InputProps={{
                endAdornment:
                  <InputAdornment position="end">
                    <AccountCircle style={{ fill: 'white' }} />
                  </InputAdornment>
              }}
            />
          </FormControl>

          <FormControl sx={{ marginTop: 1.25 }}>
            <TextField
              error={Boolean(formErrors.password)}
              helperText={formErrors.password}
              id="outlined-error-helper-text"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              className={classes.textInput}
              onChange={handleChange('password')}
              InputProps={{
                endAdornment:
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end">
                      {showPassword ? <VisibilityOff style={{ fill: 'white' }} /> : <Visibility style={{ fill: 'white' }} />}
                    </IconButton>
                  </InputAdornment>
              }}
            />
          </FormControl>

          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked color="info" />} label="Remember me" />
          </FormGroup>

          <FormControl sx={{ marginBottom: 2, marginTop: 2 }}>
            <Button
              variant="contained"
              type="submit"
              sx={{ textTransform: 'initial' }}
              className={classes.signIn}>Sign in</Button>
          </FormControl>
          <GridContainer sx={{ marginTop: '.5rem' }} justifyContent="space-between">
            <Button variant="outlined" className={classes.forgotPassword} sx={{ marginRight: '10px' }}>Forgot password?</Button>
            <Button variant="outlined" className={classes.forgotPassword}>Sign up</Button>
          </GridContainer>

          <GridContainer sx={{ marginTop: '1.25rem' }} justifyContent="center">
            <IconButton aria-label="toggle password visibility" edge="end" sx={{ mx: .25 }}>
              <Twitter sx={{ fill: '#1d9bf0' }} />
            </IconButton>
            <IconButton aria-label="toggle password visibility" edge="end" sx={{ mx: .25 }}>
              <Facebook sx={{ fill: '#3578e5' }} />
            </IconButton>
            <IconButton aria-label="toggle password visibility" edge="end" sx={{ mx: .25 }}>
              <Instagram sx={{ fill: '#b93a64' }} />
            </IconButton>
          </GridContainer>
        </GridContainer>
      </form>
    </Paper>
  );

  return (
    <>
      <Helmet><title>Metaflex - Login</title></Helmet>
      <GridContainer className={classes.root}>
        <GridContainer justifyContent="center" alignItems="center">
          <Box sx={{ display: 'flex' }}>
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}>
              {icon}
            </Grow>
          </Box>
        </GridContainer>
      </GridContainer>
    </>
  );
}
