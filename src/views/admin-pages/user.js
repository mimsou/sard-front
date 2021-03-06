import React, { useState } from "react";

import classnames from "classnames";

import Chart from "chart.js";

import { Line, Bar } from "react-chartjs-2";

import AuthService from "../../services/auth.service";

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

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import AdminHeader from "components/Headers/AdminHeader.js";

const getUser = () => {
  AuthService.getCurrentUser();
};

const User = (props) => {
  return (
    <>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card>
              <CardHeader>Utilisateurs</CardHeader>
              <Button
                onClick={() => {
                  getUser();
                }}
              >
                {" "}
                getCurrentUser{" "}
              </Button>
              <CardBody>
                <br></br>
                <br></br>
                <br></br>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
