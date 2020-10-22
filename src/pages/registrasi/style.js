import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    // color: "lightblue",
    textAlign: "center",
    marginBottom: theme.spacing(3),
    fontWeight: "bold",
  },
  green: {
    color: "#b8de6f",
  },
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(6),
  },
  buttons: {
    marginTop: theme.spacing(6),
  },
  txt_button: {
    color: "#fff",
  },
}));

export default useStyles;
