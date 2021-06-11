import React, { useState } from "react";

import AuthService from "../../services/auth.service";

import { Filter, List, Archive } from "@lifeomic/chroma-react/icons/lined";

import bg from "../../assets/img/theme/bg.png";

import Permit from "../../permission/PermitComponent";

import FrontHeader from "components/Headers/FrontHeader.js";

import UserReport from "./user-report/UserReport"

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

const getUser = () => {
  AuthService.getCurrentUser();
};

const Index = (props) => {

  const center = {
    margin: "auto",
  
  };

  return (
    <>
      <FrontHeader />
      <Container style={{height:"200%"}} className="mt--7 pb-7" fluid>
        <Row>
          <Col md="8" style={{ margin: "auto" }}>
            <Row>
              {" "}
              <Permit perm={"ROLE_ADMIN.manageUser"}>
                <Col className="mb-4  " >
                  <IconTile style={center} onClick={() => console.log("clicked")}>
                    <IconTileHero backgroundUrl={bg} />
                    <IconTileBadge icon={Filter} />
                    <IconTileContent
                      text="Gererateur analytique"
                      caption="Analyse des données"
                    />
                  </IconTile>
                </Col>
              </Permit>
              <Col className="mb-4">
                <IconTile style={center} onClick={() => console.log("clicked")}>
                  <IconTileHero backgroundUrl={bg} />
                  <IconTileBadge icon={Archive} />
                  <IconTileContent
                    text="Création de rapports"
                    caption="Report builder"
                  />
                </IconTile>
              </Col>
              <Col className="mb-4">
                <IconTile style={center} onClick={() => console.log("clicked")}>
                  <IconTileHero backgroundUrl={bg} />
                  <IconTileBadge icon={List} />
                  <IconTileContent
                    text="Mes Rapports"
                    caption="Suivie des rapports"
                  />
                </IconTile>
              </Col>
            </Row>

            <Row>
              <Col className="mb-12">
                <UserReport></UserReport>
              </Col>
            </Row>
 
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
