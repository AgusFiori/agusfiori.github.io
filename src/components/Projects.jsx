import React from "react";
import { Container } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cocolichePrev from "../assets/projects/cocolichePrev.jpg";
import rewildingPrev from "../assets/projects/rewildingPrev.jpg";
import mytineraryPrev from "../assets/projects/mytineraryPrev.jpg";

const Projects = () => {
  let backgroundMode = "dark";
  let textColor = "white";
  return (
    <Container
      id="projects"
      fluid
      className={`d-flex justify-content-center vh-100 align-items-center bg-${backgroundMode} text-${textColor} border-top border-bottom border-primary`}
    >
      <div className="d-flex w-100 flex-column justify-content-center align-items-center m-5 p-5">
        <div className="p-3">
          <p className="h2">Projects</p>
        </div>
        <div className="d-flex justify-content-center">
          <Carousel
            axis="horizontal"
            autoPlay="true"
            centerMode="true"
            emulateTouch="true"
            infiniteLoop="true"
            interval="5000"
            stopOnHover="true"
            useKeyboardArrows="true"
          >
            <div>
              <img src={cocolichePrev} alt="project" />
              <p className="legend">
                <a
                  href="http://cocoliche.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  E-commerce "Cocoliche"
                </a>
              </p>
            </div>
            <div>
              <img src={rewildingPrev} alt="project" />
              <p className="legend">
                <a
                  href="https://rewilding.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  Web app "Rewilding"
                </a>
              </p>
            </div>
            <div>
              <img src={mytineraryPrev} alt="project" />
              <p className="legend">
                <a
                  href="https://github.com/AgusFiori/mytinerary-fiori"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  Mytinerary App
                </a>
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
