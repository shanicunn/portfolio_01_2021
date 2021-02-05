import React from 'react';
import radio from '../assets/radio.png';
import mancala from '../assets/mancala.png';
import nasa from '../assets/nasa.png';
import arrow_right from '../assets/arrow-166-32.png';
import arrow_left from '../assets/arrow-228-32.png';

function Skills_Projects() {
    return (
      <main className="Skills_Projects">
        <section className="Skills">
          <h2 class="section-title" id="main-skills">Skills:</h2>
          <div id="skills-1">
            <table>
              <tr>
                <td>HTML5</td>
                <td><div className="progress-bar">
                  <div id="progress-html"></div>
                </div></td>
              </tr>
              <tr>
                <td>CSS3</td>
                <td><div className="progress-bar">
                <div id="progress-css"></div>
                  </div></td>
              </tr>
              <tr>
                <td>JAVASCRIPT</td>
                <td><div className="progress-bar">
                <div id="progress-js"></div>
                  </div></td>
              </tr>
                <tr>
                  <td>REACT.JS</td>
                  <td><div className="progress-bar">
                <div id="progress-react"></div>
                  </div>
                  </td>
                </tr>
            </table>
            {/* <ul>
              <li>HTML5 
                <div className="progress-bar">
                  <div id="progress-html"></div>
                </div>
              </li>
              <li>CSS3 
              <div className="progress-bar">
                <div id="progress-css"></div>
                  </div>
              </li>
              <li>JAVASCRIPT 
              <div className="progress-bar">
                <div id="progress-js"></div>
                  </div>
              </li>
              <li>REACT.JS 
              <div className="progress-bar">
                <div id="progress-react"></div>
                  </div>
              </li>
            </ul> */}
          </div>
          <div id="skills-2">
            <table>
              <tr>
                <td>JAVA</td>
                <td><div className="progress-bar">
                <div id="progress-java"></div>
                  </div></td>
              </tr>
              <tr>
                <td>SPRINGBOOT</td>
                <td><div className="progress-bar">
                <div id="progress-springboot"></div>
                  </div></td>
              </tr>
              <tr>
                <td>PYTHON</td>
                <td><div className="progress-bar">
                <div id="progress-python"></div>
                  </div></td>
              </tr>
                <tr>
                  <td>GIT</td>
                  <td><div className="progress-bar">
                  <div id="progress-git"></div>
                  </div>
                  </td>
                </tr>
            </table>
          {/* <ul>
              <li>JAVA 
              <div className="progress-bar">
                <div id="progress-java"></div>
                  </div>
              </li>
              <li>SPRINGBOOT 
              <div className="progress-bar">
                <div id="progress-springboot"></div>
                  </div>
              </li>
              <li>PYTHON 
              <div className="progress-bar">
                <div id="progress-python"></div>
                  </div>
              </li>
              <li>GIT 
              <div className="progress-bar">
                  <div id="progress-git"></div>
                  </div>
              </li>
            </ul> */}
          </div>
        </section>

        <section className="Projects">
          <h2 class="section-title" id="main-projects">Projects:</h2>
            <div id="projects-desc">
                <figure>
            <img src={radio} alt="radio" className="screenshot"/>
            <figcaption>
              Title: Shani's Radio<br/>
              Tools: React, Javascript, CSS, HTML<br/>
              Description: 
            </figcaption>
          </figure>

          <figure>
            <img src={mancala} alt="mancala" className="screenshot"/>
            <figcaption>
              Title: Mancala<br/>
              Tools: jQuery, Javascript, CSS, HTML<br/>
              Description:
            </figcaption>
          </figure>

          <figure>
            <img src={nasa} alt="nasa api" className="screenshot"/>
            <figcaption>
              Title: NASA's Astrology Photo of the Day<br/>
              Tools: React, Javascript, CSS, HTML, API<br/>
              Description:
            </figcaption>
          </figure>
            </div>
        
        </section>
      </main>
    );
  }
  
  export default Skills_Projects;