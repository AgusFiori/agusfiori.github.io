import React from "react";
import { Container } from "react-bootstrap";
import webDevPic from "../assets/Reactjs-banner-img.png";
import Fade from "react-reveal/Fade";

const About = () => {
  let backgroundMode = "dark";
  let textColor = "white";
  return (
    <Container
      id="about"
      fluid
      className={`d-flex justify-content-center vh-100 align-items-center bg-${backgroundMode} text-${textColor}`}
    >
      <div className="d-flex w-100 flex-column justify-content-center align-items-center">
        <div>
          <p className="h1 pb-5">About me</p>
        </div>
        <div className="d-flex w-75 h-75">
          <div className="w-75 p-3">
            <Fade bottom>
              <p className="h4">So.</p>
              <br />
              <p className="h4">
                As I said, I'm a{" "}
                <b className="text-secondary">
                  Full Stack Web & Mobile MERN Developer
                </b>
                .
              </p>
              <p className="h6">
                <i>(That's MongoDB, Express, React and Node.js)</i>
              </p>
              <br />
              <p className="h4">
                I'm a bootcamp grad, based in{" "}
                <b className="text-secondary">Buenos Aires, Argentina</b>,
                currently looking for my first job in the industry.
              </p>
              <br />
              <p className="h4">
                So if you think my profile would be a good fit somewhere,{" "}
                <a href="#contact">just hit me up!</a>
              </p>
            </Fade>
          </div>
          <div className="w-75 d-flex justify-content-center align-items-center">
            <Fade right>
              <img
                src={webDevPic}
                alt="Web development"
                style={{ height: "350px" }}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
