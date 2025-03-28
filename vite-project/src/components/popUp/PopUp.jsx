import React, { useRef, useEffect } from "react";
import SvgModifier from "../svg_modifier/Svg_Modifier";
import style from "./PopUp.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

const PopUp = ({ show, handleClose, data, num, img }) => {
  if (show) {
    console.log(`El Pop Up abierto es el num: `, num);
    console.log("data :>> \n", data);
  }

  return (
    show &&
    img && (
      <Container
        className={`position-absolute top-50 start-50 translate-middle p-4 shadow-lg rounded ${style["bg-teal-100"]}`}
        style={{ zIndex: 1050, minWidth: "50vw", minHeight: "90vh" }}
      >
        <Row className="">
          <Col xs={{ span: 11, offset: 0 }} className="text-center ">
            <h2>Datos de la pieza Nº {num}</h2>
          </Col>
          <Col xs={{ span: 1, offset: 0 }} className="text-center ">
            <Badge
              bg="danger"
              aria-label="Close"
              type="button"
              className="t-1"
              onClick={handleClose}
            >
              X
            </Badge>
          </Col>
        </Row>

        <Row className={`flex border-bottom border-dark border-3`}>
          <Col xs={{ span: 11, offset: 0 }} className="text-center">
            <h4>{`Diseño N°: ${data[0]["Diseño N°"]}`}</h4>
          </Col>
        </Row>
        <Row className={`flex`}>
          <Col>
            <div
              className={`${style.svgDiv} `}
              style={{ height: "100%", width: "auto" }}
            >
              <SvgModifier data={data} svg={img} />
            </div>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default PopUp;
