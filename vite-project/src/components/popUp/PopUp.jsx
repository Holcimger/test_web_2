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
        className={`position-absolute top-50 start-50 translate-middle p-4 pb-0 shadow-lg rounded ${style["bg-blue-100"]} d-flex flex-column`} // Added d-flex flex-column
        style={{
          zIndex: 1050,
          minWidth: "50vw",
          height: "99vh",
          overflow: "hidden",
        }}
      >
        <Row className="d-flex border-bottom border-dark border-3 space-around align-items-end justify-content-between pb-2">
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
            className="text-end align-self-center" // Adjusted alignment slightly
            style={{ position: "relative" }}
          >
            <CloseButton
              onClick={handleClose}
              className={`${style["bg-red-200"]} fw-bold`} // Removed text-end here
            />
          </Col>
        </Row>

        {/* --- Bottom Row (SVG Content) --- */}
        {/* flex-grow-1 makes this row take remaining vertical space */}
        {/* h-100 ensures the row itself tries to be full height relative to the growing space */}
        {/* overflow-hidden can prevent unexpected scrollbars within the row */}
        <Row className={`flex-grow-1 h-100 overflow-hidden`}>
          {/* d-flex h-100 ensures Col takes full height and manages its child flex item */}
          <Col className="d-flex flex-column h-100">
            {/* The div now correctly expands because its parents (Col, Row) have height */}
            
            <div
              style={{
                overflow: "auto", // Keep scroll if SVG is larger than div
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%", // Takes height from Col                
                // backgroundColor: 'lightcoral', // Temporary BG to see the div bounds
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
