import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import "../styles/Landing.scss";
import "../custom.scss";
import reactIcon from "../assets/react-icon-14.jpg";
import reduxIcon from "../assets/redux-283024.png";
import nodeIcon from "../assets/nodejs-icon.png";
import expressIcon from "../assets/expressIcon.png";
import mongoDBIcon from "../assets/mongodbIcon.png";
import jsIcon from "../assets/javascriptIcon.png";
import htmlIcon from "../assets/html-file-pngrepo-com.png";
import cssIcon from "../assets/cssIcon.png";
import sassIcon from "../assets/sassIcon.png";
import expoIcon from "../assets/expoIcon.png";

const Landing = (props) => {
  var backgroundMode = "dark";
  var textColor = "white";

  return (
    <div>
      <Container
        fluid
        className={`d-flex justify-content-center vh-100 align-items-center bg-${backgroundMode} text-${textColor}`}
      >
        <div
          className="d-flex flex-column align-items-center"
          style={{ zIndex: "1" }}
        >
          <h2>
            Hi, my name is <b style={{ color: "#e31b6d" }}>Agustin Fiori</b>
          </h2>
          <h2>I'm a Full Stack Web Developer</h2>
        </div>
        <div class="scroll-prompt" id="js_scrollPrompt">
          <div class="scroll-prompt-shape"></div>
        </div>
      </Container>
      <ul className="circles border-bottom border-primary">
        <li
          style={{
            backgroundColor: "#593d88",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <img src={reduxIcon} alt="react icon" style={{ height: "50px" }} />
        </li>
        <li style={{ backgroundColor: "transparent" }}>
          <img src={sassIcon} alt="react icon" style={{ height: "30px" }} />
        </li>
        <li
          style={{
            backgroundColor: "whitesmoke",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <img src={expoIcon} alt="react icon" style={{ height: "30px" }} />
        </li>
        <li
          style={{
            backgroundColor: "#f7df1e",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={jsIcon} alt="react icon" style={{ height: "30px" }} />
        </li>
        <li
          style={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={htmlIcon} alt="react icon" style={{ height: "30px" }} />
        </li>
        <li
          style={{
            backgroundColor: "#61DBFB",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={reactIcon} alt="react icon" style={{ height: "100px" }} />
        </li>
        <li
          style={{
            backgroundColor: "#6aa25a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={nodeIcon} alt="react icon" style={{ height: "100px" }} />
        </li>
        <li
          style={{
            backgroundColor: "whitesmoke",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={expressIcon} alt="react icon" style={{ height: "100px" }} />
        </li>
        <li
          style={{
            backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={cssIcon} alt="react icon" style={{ height: "25px" }} />
        </li>
        <li
          style={{
            backgroundColor: "#bed3b6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={mongoDBIcon} alt="react icon" style={{ height: "100px" }} />
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer.theme,
  };
};

export default connect(mapStateToProps)(Landing);
