import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark border-top">
      <div className="p-3 d-flex justify-content-center">
        <p className="mb-0 text-white">
          Made with ❤ by{" "}
          <a
            href="https://github.com/AgusFiori"
            rel="noreferrer"
            target="_blank"
          >
            me!
          </a>
        </p>
      </div>
    </Container>
  );
};

export default Footer;
