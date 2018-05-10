import React, { Component } from 'react';

import { projects } from '../helpers/data';

const ProjectList = projects.map((project, index) => {
  return (
    <div className="project-wrap" key={index}>
      <a target="_blank" rel="noopener noreferrer" href={project.link}>
        <h3 className="project-desc">{project.name}</h3>
      </a>
      <p>{project.description}</p>
    </div>
  );
});

export class Projects extends Component {
  render() {
    return (
      <div className="container-fluid text-center projects" id="projects">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">{ProjectList}</div>
      </div>
    );
  }
}

export default Projects;
