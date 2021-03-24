import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  let backgroundMode = "dark";
  let textColor = "white";
  return (
    <Container
      id="contact"
      fluid
      className={`d-flex justify-content-center vh-100 align-items-center bg-${backgroundMode} text-${textColor}`}
    >
      <div className="d-flex flex-column align-items-center">
        <h2>For now, you can contact me at</h2>
        <a href="mailto:agus_fiori@hotmail.com">agus_fiori@hotmail.com</a>
      </div>
    </Container>
  );
};

export default Contact;
