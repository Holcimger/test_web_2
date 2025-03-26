import React from "react";
import "./header.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const logo =
  "https://www.holcim.com.ar/themes/custom/corporate_country/components/header/images/holcim_logo_color.svg";

const Header = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary sm">
        <Container>
          <Navbar.Brand href="http://localhost:5173/" class="">
            <img
              alt="Logo Holcim"
              src={logo}
              width="auto"
              height="auto"
              className="d-inline-block align-bottom"
            />{" "}
            ARGENTINA
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
