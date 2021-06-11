import AdminIndex from "views/admin-pages/Index.js"; 
import Login from "views/auth-pages/Login.js";
import Register from "views/auth-pages/Register";
import FrontIndex from "views/front-pages/Index.js";
import ReportBuilder from "views/front-pages/report-builder";

var routes = [
  {
    path: "/index",
    name: "Fronts",
    icon: "ni ni-tv-2 text-primary",
    component: FrontIndex,
    layout: "/front",
  },  {
    path: "/index",
    name: "Accueil",
    icon: "ni ni-tv-2 text-primary",
    component: AdminIndex,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-primary",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/registration",
    name: "Inscription",
    icon: "ni ni-key-25 text-primary",
    component: Register,
    layout: "/auth",
  }, {
    path: "/report-builder",
    name: "Générateur de rapport",
    icon: "ni ni-archive-2 text-primary",
    component: ReportBuilder,
    layout: "/front",
  },
  
];
export default routes;
