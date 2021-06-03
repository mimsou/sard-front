import React, { useState } from "react";

import classnames from "classnames";

import Chart from "chart.js";

import { Line, Bar } from "react-chartjs-2";

import AuthService from "../../services/auth.service";

import { Users, Lock, List } from "@lifeomic/chroma-react/icons/lined";

import bg from "../../assets/img/theme/bg.png";

import routes from "routes.js";

import Permit from "../../permission/PermitComponent";

import {
  IconTile,
  IconTileBadge,
  IconTileContent,
  IconTileHero,
} from "@lifeomic/chroma-react/components/IconTile";

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

const Index = (props) => {
  return (
    <>
      <AdminHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col md="8" style={{ margin: "auto" }}>
            <Row>
              <Col>
                <Permit>
                  <IconTile onClick={() => console.log("clicked")}>
                    <IconTileHero backgroundUrl={bg} />
                    <IconTileBadge icon={Users} />
                    <IconTileContent
                      text="Utilisateurs"
                      caption="gérer les utilisateur"
                    />
                  </IconTile>
                </Permit>
              </Col>
              <Col>
                <IconTile onClick={() => console.log("clicked")}>
                  <IconTileHero backgroundUrl={bg} />
                  <IconTileBadge icon={Lock} />
                  <IconTileContent text="Access" caption="Gestion des Access" />
                </IconTile>
              </Col>
              <Col>
                <IconTile onClick={() => console.log("clicked")}>
                  <IconTileHero backgroundUrl={bg} />
                  <IconTileBadge icon={List} />
                  <IconTileContent
                    text="Rapport"
                    caption="Suivie des rapports"
                  />
                </IconTile>
              </Col>
              <Col>
                <IconTile onClick={() => console.log("clicked")}>
                  <IconTileHero backgroundUrl={bg} />
                  <IconTileBadge icon={Lock} />
                  <IconTileContent text="Text" caption="caption" />
                </IconTile>
              </Col>
            </Row>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
