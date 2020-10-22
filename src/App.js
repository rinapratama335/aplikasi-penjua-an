import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/404";
import Login from "./pages/login";
import LupaPassword from "./pages/lupa-password";
import Registrasi from "./pages/registrasi";

import Private from "./pages/private";
import PrivateRoute from "./components/PrivateRoute";
import FirebaseProvider from "./components/FirebaseProvider";

// Import komponen material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./config/theme";

function App() {
  return (
    <>
      <CssBaseline />
      <FirebaseProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Private} />
              <PrivateRoute path="/pengaturan" component={Private} />
              <PrivateRoute path="/produk" component={Private} />
              <PrivateRoute path="/transaksi" component={Private} />
              <Route path="/registrasi" component={Registrasi} />
              <Route path="/login" component={Login} />
              <Route path="/lupa-password" component={LupaPassword} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </ThemeProvider>
      </FirebaseProvider>
    </>
  );
}

export default App;
