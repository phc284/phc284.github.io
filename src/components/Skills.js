import React, { Component } from 'react';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('../images/skills', false, /\.(png|jpe?g|svg)$/)
);

export class Skills extends Component {
  render() {
    return (
      <div className="container-fluid text-center" id="skills">
        <h2>What I Know</h2>
        <p className="lead">
          I am a full-stack web developer with a focus on front-end
          technologies.
        </p>
        <div className="skill-grid">
          {images.map((image, index) => (
            <img key={index} className="icon" src={image} alt="a" />
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
