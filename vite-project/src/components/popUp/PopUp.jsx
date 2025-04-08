import React, { useState } from "react";
import SvgModifier from "../svg_modifier/Svg_Modifier";
import styles from "./PopUp.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Modal from "react-bootstrap/Modal";

import CloseButton from "react-bootstrap/CloseButton";

const PopUp = ({ show, handleClose, data, num, img }) => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  if (show) {
    console.log(`El Pop Up abierto es el num: `, num);
    console.log("data :>> \n", data);
  }

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    show &&
    img && (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          centered
          dialogClassName={styles["modal-tall-wide"]} // Use class for sizing/styling
          size="xl"
        >
          <Modal.Header >
            <Container fluid className="d-flex flex-column">
              {/* --- Top Row (Header Info) --- */}
              {/* Row won't shrink, columns size automatically */}
              <Row className="d-flex border-bottom border-dark border-3 align-items-end flex-shrink-0">
                {/* Use col-auto for automatic sizing based on content */}
                <Col className="align-self-end col-auto">
                  {/* Ensure data and data[0] exist before accessing */}
                  <h2>{`${data?.[0]?.["Descripción"] || "No Description"}`}</h2>
                </Col>
                <Col className="align-self-end col-auto">
                  <h4>{`Diseño N°: ${data?.[0]?.["Diseño N°"] || "N/A"}`}</h4>
                </Col>
                <Col className="align-self-end col-auto">
                  <h4>{`Pos. ${num}`}</h4>
                </Col>
                {/* Use col-auto and ms-auto to push the button to the right */}
                <Col className="text-end align-self-center col-auto ms-auto">
                  <CloseButton
                    onClick={handleClose}
                    className={`${styles ? styles["bg-red-200"] : ""} fw-bold`}
                  />
                </Col>
              </Row>
            </Container>
          </Modal.Header>
          {/* Modal Content */}
          <Modal.Body
            // Removed inline style for position/width/height/overflow/zIndex
            // Kept necessary classes for background, padding, layout
            className={`shadow-xl rounded d-flex flex-column ${styles["bg-blue-100"]}`}
            // Removed fullscreen prop
          >
            <Container>
              {/* Container takes full height of the flex body */}

              {/* --- Bottom Row (SVG Content) --- */}
              {/* This row grows to fill remaining space and hides overflow */}
              <Row className="flex-grow-1 overflow-hidden pt-3">
                {" "}
                {/* Added some top padding */}
                {/* Col fills the row */}
                <Col className="d-flex flex-column h-100">
                  {/* SVG container handles centering and scaling */}
                  <div className="svg-container">
                    {/* Ensure SvgModifier renders an <svg> tag */}
                    <SvgModifier data={data} svg={img} />
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    )
  );
};

export default PopUp;
