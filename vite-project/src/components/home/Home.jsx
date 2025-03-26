import React from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imagen_ppal from "/Img_Ppal.svg";
const Home = () => {
  return (
    <Card bg="light">
      <Card.Img variant="top" src={imagen_ppal} />
    </Card>
  );
};

export default Home;
