import React, { Component } from 'react';

export class Projects extends Component {
  render() {
    return (
      <div class="container-fluid text-center projects" id="projects">
        <h2 class="projects-title">My Projects</h2>
        <div class="projects-grid">
          <div class="project-wrap">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cowboys-resource.herokuapp.com"
            >
              <img class="project-item" src="Images/cowboys-resource.png" />><h3 class="project-desc">
                Dallas Cowboys Resource
              </h3>
            </a>
          </div>
          <div class="project-wrap">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/phc284/newnews"
            >
              <img class="project-item" src="Images/newnews.png" />
              <h3 class="project-desc">NewNews</h3>
            </a>
          </div>
          <div class="project-wrap">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://scream-machine.herokuapp.com"
            >
              <img class="project-item" src="Images/screamMachine.png" />
              <h3 class="project-desc">Scream Machine</h3>
            </a>
          </div>
          <div class="project-wrap">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://getmea.gift"
            >
              <img class="project-item" src="Images/getmeagift.png" />
              <h3 class="project-desc">GetMeAGift</h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
