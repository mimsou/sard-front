import React, { useState } from "react";

import classnames from "classnames";

import '../../../src/assets/css/index.css';
import '../../../src/assets/css/base.css';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

import Header from "components/Headers/Header.js";

const FrontPage = (props) => {
  return (
    <>
      <Container fluid>
        <Row className="shopys-special-spacing-top m-5">
          <Container>
            <Row className="m-9">
              <Col md="4">
                <div className="m-2 enhace-shading wind"></div>
              </Col>
              <Col md="4">
                <div className="m-2 enhace-shading wind"></div>
              </Col>
              <Col md="4">
                <div className="m-2 enhace-shading wind"></div>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default FrontPage;
