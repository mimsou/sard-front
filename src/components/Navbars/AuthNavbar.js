 
import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service"
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const AdminNavbar = () => {
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        
        <Container className="px-4">

          <NavbarBrand to="/" tag={Link}>
            <img
               className="shopys-logo shadow-sm	d-sm-none d-md-block"
              alt="..."
              src={
                require("../../assets/img/brand/logo.png").default
              }
            />
          </NavbarBrand>
          
           
        </Container>

      </Navbar>
    </>
  );
};

export default AdminNavbar;
