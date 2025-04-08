import React, { useState, useEffect } from "react";
import styles from "./home.module.scss";

import ImagenPrincipal from "/Img_Ppal.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function Home({ toggle }) {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch(ImagenPrincipal)
      .then((response) => response.text())
      .then((data) => setSvgContent(data))
      .catch((error) => console.error("Error fetching SVG:", error));
  }, []);

  return (
    <Container
      className={`${styles.myCard} bg-secondary-subtle fluid rounded`}
      fluid
    >
      <Row>
        <Col className={`p-2`} xs={8}>
          {svgContent && (
            <div dangerouslySetInnerHTML={{ __html: svgContent }} />
          )}
        </Col>
        <Col
          className={`border-start border-dark border-3 d-flex align-items-center justify-content-center`}
        >
          <Stack
            gap={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold `}
              onClick={toggle(1)}
            >
              &nbsp;1&nbsp;
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(2)}
            >
              &nbsp;2&nbsp;
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(3)}
            >
              &nbsp;3&nbsp;
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(4)}
            >
              &nbsp;4&nbsp;
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(5)}
            >
              &nbsp;5&nbsp;
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(6)}
            >
              &nbsp;6&nbsp;
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(7)}
            >
              &nbsp;7&nbsp;
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(8)}
            >
              &nbsp;8&nbsp;
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(9)}
            >
              &nbsp;9&nbsp;
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(10)}
            >
              10
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(11)}
            >
              11
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(12)}
            >
              12
            </Button>
          </Stack>
        </Col>
        <Col
          className={`border-start border-dark border-3 d-flex align-items-center justify-content-center`}
        >
          <Stack
            gap={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold `}
              onClick={toggle(13)}
            >
              13
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(14)}
            >
              14
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(15)}
            >
              15
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(16)}
            >
              16
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(17)}
            >
              17
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(18)}
            >
              18
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(19)}
            >
              19
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(20)}
            >
              20
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(21)}
            >
              21
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(22)}
            >
              22
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(23)}
            >
              23
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(24)}
            >
              24
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
