 import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
   
      <Row className="row shopys-footer shopys-special-spacing-top">
        <Container  >
          <Row className="m-3">
            <Col md="4" className="text-center shopys-footer-head">Contact</Col>
            <Col md="4" className="text-center shopys-footer-head">
         
            </Col>
            <Col md="4" className="text-center shopys-footer-head">Link</Col>
          </Row>

          <Row className="m-3">
            <Col  md="4"  className="text-center shopys-footer-content">
              Tel: 29 345 911<br />
              Mail: contact@shopys.art
            </Col>
            <Col md="4"  className="text-center shopys-footer-content">
                GlitterPoppy's 2021
            </Col>
            <Col md="4" className="text-center shopys-footer-content">
              <a href="" class="shopy-gallery" class="link link--elara"
                >Gallery</a
              ><br />
              <a href="" class="shopy-revendeur" class="link link--elara"
                >Renvendeurs</a
              >
            </Col>
          </Row>
        </Container>
      </Row>
   
  );
};

export default Footer;
