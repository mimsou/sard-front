 import AdminIndex from "views/admin-pages/Index.js"; 
import Login from "views/auth-pages/Login.js";
import Register from "views/auth-pages/Register";
import FrontIndex from "views/front-pages/Index.js";

var routes = [
  {
    path: "/index",
    name: "Fronts",
    icon: "ni ni-tv-2 text-primary",
    component: FrontIndex,
    layout: "/front",
  },  {
    path: "/index",
    name: "Admin",
    icon: "ni ni-tv-2 text-primary",
    component: AdminIndex,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/registration",
    name: "Inscription",
    icon: "ni ni-key-25 text-info",
    component: Register,
    layout: "/auth",
  },
  
];
export default routes;
