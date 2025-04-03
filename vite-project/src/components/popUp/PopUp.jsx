import React from "react";
import SvgModifier from "../svg_modifier/Svg_Modifier";
import style from "./PopUp.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CloseButton from "react-bootstrap/CloseButton";

const PopUp = ({ show, handleClose, data, num, img }) => {
  if (show) {
    console.log(`El Pop Up abierto es el num: `, num);
    console.log("data :>> \n", data);
  }

  return (
    show &&
    img && (
      <Container
        className={`position-absolute top-50 start-50 translate-middle p-4 pb-0 shadow-lg rounded ${style["bg-blue-100"]}`}
        style={{ zIndex: 1050, minWidth: "50vw", minHeight: "99vh" }}
      >
        <Row className="d-flex border-bottom border-dark border-3 space-around align-items-stretch align-items-end justify-content-between">
          <Col className="align-self-end" xs={{ span: 4, offset: 0 }}>
            <h2>{`${data[0]["Descripción"]}`}</h2>
          </Col>

          <Col className="align-self-end">
            <h4>{`Diseño N°: ${data[0]["Diseño N°"]}`}</h4>
          </Col>

          <Col className="align-self-end">
            <h4>{`Pos. ${num}`}</h4>
          </Col>

          <Col
            xs={{ span: 1, offset: 0 }}
            className="text-end"
            style={{ position: "relative" }} // Set relative positioning
          >
            <CloseButton
              onClick={handleClose}
              className={`${style["bg-red-200"]} fw-bold text-end`}
            />
          </Col>
        </Row>

        <Row className={`flex`}>
          <Col>
            <div
              // className={`${style.svgDiv} `}
              style={{
                overflow: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
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
