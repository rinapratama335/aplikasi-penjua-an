import React from "react";
// import styles from "./index.module.css";

// Import komponen material ui
import Button from "@material-ui/core/Button";

import useStyles from "./style";

function Registrasi() {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.blue}>Halaman Registrasi</h1>
      <h3 className={classes.green}>
        Isi form untuk lanjut ke tahab berikutnya
      </h3>
      <Button color="primary" variant="contained">
        Register
      </Button>
    </>
  );
}

export default Registrasi;
