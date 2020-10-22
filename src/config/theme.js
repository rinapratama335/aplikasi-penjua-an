import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import lightBlue from "@material-ui/core/colors/lightBlue";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: lightBlue,
  },
});

export default theme;
