import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="App">
      <div class="ct" id="t1">
        <div class="ct" id="t2">
          <div class="ct" id="t3">
            <div class="ct" id="t4">
              <Navbar />
              <section>
                <div class="page" id="p1">
                  <li class="icon fa fa-home"><span class="title">Hi !</span><span class="hint">My name is Agustin, I'm a Full Stack Web Developer, working with the MERN Stack.</span></li>
                </div>
                <div class="page" id="p2">
                  <li class="icon fa fa-keyboard-o"><FontAwesomeIcon icon={faUser} /><span class="title">About me</span><span class="hint">I'm a bootcamp grad, full stack web developer located in Buenos Aires, Argentina. I specialize in working with the MERN Stack and have a few projects of my own on my repository which you can find at <a href="https://github.com/AgusFiori" alt="My github">my Github profile</a>. I'm fond of using React as a framework, and building functional CRUD apps.</span></li>
                </div>
                <div class="page" id="p3">
                  <li class="icon fa fa-coffee"><FontAwesomeIcon icon={faBriefcase} /><span class="title">Projects</span><span class="hint">Here, you can find my latest ones</span><span className="hint"><a href="https://github.com/AgusFiori">
                    https://github.com/AgusFiori
                        </a></span>
                  </li>
                </div>
                <div class="page" id="p4">
                  <li class="icon fa fa-dribbble"><FontAwesomeIcon icon={faEnvelope} /><span class="title">Contact me</span><span class="hint"><a href="mailto:agus_fiori@hotmail.com" rel="noreferrer">agus_fiori@hotmail.com</a>
                  </span></li>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
