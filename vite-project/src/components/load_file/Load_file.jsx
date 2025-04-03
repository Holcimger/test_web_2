import React from "react";
import * as XLSX from "xlsx";
import style from "./load_file.module.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import CloseButton from "react-bootstrap/CloseButton";

import Card from "react-bootstrap/Card";

const Load_file = ({ show, handleClose, onFileLoaded }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];

      // Limit the number of columns to the first 15
      const maxColumns = 15;
      const range = XLSX.utils.decode_range(worksheet["!ref"]);

      if (range.e.c >= maxColumns) {
        range.e.c = maxColumns - 1;
        worksheet["!ref"] = XLSX.utils.encode_range(range);
      }

      // Add options for sheet_to_json
      const json = XLSX.utils.sheet_to_json(worksheet, {
        defval: "", // Use empty string for empty cells esto hace que me traiga todas las 15 columnas
      });
      onFileLoaded(json);
      handleClose();
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    show && (
      <Container
        className={`${style["bg-blue-100"]} 
        d-flex flex-column position-absolute top-50 start-50 translate-middle p-4 shadow-lg rounded `}
        style={{ zIndex: 1050, minWidth: "40vw", minHeight: "20vw" }} // Ensure it's on top
      >
        <Row>
          <Col xs={{ span: 1, offset: 11 }} className={`text-end`}>
            <CloseButton
              onClick={handleClose}
              className={`${style["bg-red-200"]} fw-bold text-end`}
            />
          </Col>
        </Row>
        <Row className="flex-grow-1 justify-content-center align-items-center">
          <Col xs={{ span: 10, offset: 1 }} className=" d-flex h-100">
            <Card
              bg={"light"}
              text={"light" === "light" ? "dark" : "white"}
              style={{ width: "100%" }}
              className="p-2"
            >
              <Card.Header>
                <Card.Title className="text-center">Ingresar Excel</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3 bg-secondary-subtle text-center">
                  <Form.Label>
                    Ingersar el Excel con la cantidad de piezas disponibles en
                    el Almacén
                  </Form.Label>
                  <Form.Control
                    aria-describedby="basic-addon3"
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleFileUpload}
                    required
                    className="text-indigo-600 hover:bg-indigo-600 hover:text-white"
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default Load_file;
