import React from "react";
import "./navbar.module.scss";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const logo =
  "https://www.holcim.com.ar/themes/custom/corporate_country/components/header/images/holcim_logo_color.svg";

const Header = () => {
  return (
    <Navbar className="bg-secondary-subtle">
      <Container fluid>
        <Navbar.Brand href="#home" className="w-100">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img
                alt="Logo Holcim"
                src={logo}
                width="auto"
                height="30"
                className="d-inline-block align-bottom me-4"
              />
              <span className="fs-6 text-body-tertiary">ARGENTINA</span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">
                Stock de <span className="text-gradient">Piezas</span> en el
                Almacén
              </span>
            </div>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
