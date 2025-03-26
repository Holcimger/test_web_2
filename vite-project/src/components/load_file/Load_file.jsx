import React from "react";

import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import "./load_file.css";

const Load_file = () => {
  return (
    <Card class data-bs-theme="dark">
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Ingrese el Excel con la cantidad de piezas en el Almacén
              </Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Submit
              {/* #04bbf1 */}
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Load_file;
