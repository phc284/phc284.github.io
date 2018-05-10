import React, { Component } from 'react';

import { projects } from '../helpers/data';

const ProjectList = projects.map((project, index) => {
  return (
    <div class="project-wrap" key={index}>
      <a target="_blank" rel="noopener noreferrer" href={project.link}>
        <h3 class="project-desc">{project.name}</h3>
      </a>
      <p>{project.description}</p>
    </div>
  );
});

export class Projects extends Component {
  render() {
    return (
      <div class="container-fluid text-center projects" id="projects">
        <h2 class="projects-title">My Projects</h2>
        <div class="projects-grid">{ProjectList}</div>
      </div>
    );
  }
}

export default Projects;
