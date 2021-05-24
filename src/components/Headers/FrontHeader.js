 
import React from "react";

import '../../../src/assets/css/index.css';
import '../../../src/assets/css/base.css';
 

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const  FrontHeaders = () => {

  return (
   
      <Row className="m-4">
        <Col md="4" >
          <ul className="shopys-nav d-flex mt-5 justify-content-between">
            <li className="d-inline">
              <a href="" className="shopy-gallery link link--elara"
                >Gallery</a
              >
            </li>
            <li className="d-inline">
              <a href="" className="shopy-revendeur link link--elara"
                >Revendeurs</a
              >
            </li>
          </ul>
        </Col>

        <Col md="4" className="text-center">
          <img
            className="shopys-logo shadow-sm"
            src={
              require("../../assets/img/brand/logo.png")
                .default
            }
            alt="logo shopys"
            srcset=""
          />
        </Col>

        <Col md="4"  >
          <div className="m-5 justify-content-around d-sm-flex">
            <i
              style={{ fontSize : '40px' , color : '#0037c0' }} 
              className="fa fa-facebook-f"
            ></i>

            <i
              style={{ fontSize : '40px', color : '#c25f89' }} 
    
              className="fa fa-instagram"
            ></i>

            <i 
                style={{ fontSize : '40px', color : '#5da9dd' }}    className="fa fa-twitter"></i>
          </div>
        </Col>
      </Row>
  
  );
};

export default FrontHeaders;
