import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import FrontLayout from "layouts/Front.js";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { theme } from './theming/theme.js';
import { ThemeProvider } from "@lifeomic/chroma-react/styles";


ReactDOM.render(
<ThemeProvider theme={theme}>
  <BrowserRouter>
    <Switch>
      <Route path="/front" render={(props) => <FrontLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) =>  <AuthLayout  {...props} />} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>
  </ThemeProvider>
  ,
  document.getElementById("root")
);
