import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        tag="footer"
        className="text-center bg-info fixed-bottom p-3"
      >
        Git API
      </Container>
    </>
  );
};

export default Footer;
