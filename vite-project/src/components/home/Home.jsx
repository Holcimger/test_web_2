import React, { useState, useEffect } from "react";
import styles from "./home.module.scss";

import ImagenPrincipal from "/Img_Ppal.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function Home({ data, popUps, setPopUps, setPopUpStates, toggle }) {
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
              onClick={toggle(1)}
            >
              11
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(2)}
            >
              12
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(3)}
            >
              13
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(4)}
            >
              14
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(5)}
            >
              15
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(6)}
            >
              16
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(7)}
            >
              17
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(8)}
            >
              18
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(9)}
            >
              19
            </Button>
            <Button
              className={`${styles["bg-teal-500"]}  fw-bold`}
              onClick={toggle(10)}
            >
              20
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
