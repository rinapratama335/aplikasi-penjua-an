import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styles from "./index.module.css";

// Import komponen material ui
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import useStyles from "./style";

//Import validator
import isEmail from "validator/lib/isEmail";
function Registrasi() {
  const classes = useStyles();

  const [form, setForm] = useState({
    email: "",
    password: "",
    ulangi_password: "",
  });
  const { email, password, ulangi_password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // Mengihlangkan error ketika form diisi
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const [error, setError] = useState({
    email: "",
    password: "",
    ulangi_password: "",
  });
  const validate = () => {
    const newError = { ...error };

    if (!email) {
      newError.email = "Email harus diisi";
    } else if (!isEmail(email)) {
      newError.emial = "Email tidak valid";
    }

    if (!password) {
      newError.password = "Password harus diisi";
    }

    if (!ulangi_password) {
      newError.ulangi_password = "Ulangi password wajib diisi";
    } else if (ulangi_password != password) {
      newError.ulangi_password = "Ulangi password tidak valid";
    }

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Panggil fungsi validate
    const findErrors = validate();

    if (Object.keys(findErrors).some((err) => err != "")) {
      setError(findErrors);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h1" className={classes.title}>
          Buat akun baru
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)} noValidate>
          <TextField
            id="email"
            type="email"
            name="email"
            margin="normal"
            label="Alamat email"
            fullWidth
            required
            value={email}
            onChange={handleChange}
            helperText={error.email}
            error={error.email ? true : false}
          />
          <TextField
            id="password"
            type="password"
            name="password"
            margin="normal"
            label="Password"
            fullWidth
            required
            value={password}
            onChange={handleChange}
            helperText={error.password}
            error={error.password ? true : false}
          />
          <TextField
            id="ulangi_password"
            type="password"
            name="ulangi_password"
            margin="normal"
            label="Ulangi password"
            fullWidth
            required
            value={ulangi_password}
            onChange={handleChange}
            helperText={error.ulangi_password}
            error={error.ulangi_password ? true : false}
          />

          <Grid container className={classes.buttons}>
            <Grid item xs>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                size="large"
                className={classes.txt_button}
              >
                Register
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/login"
                variant="contained"
                size="large"
                color="secondary"
                className={classes.txt_button}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Registrasi;
