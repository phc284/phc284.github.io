import React, { Component } from 'react';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('../images/skills', false, /\.(png|jpe?g|svg)$/)
);

export class Skills extends Component {
  render() {
    console.log(images);
    return (
      <div class="container-fluid text-center skills" id="skills">
        <h2>What I Know</h2>
        <p class="lead">
          I am a full-stack web developer with a focus on front-end
          technologies.
        </p>
        <div class="skill-grid">
          {images.map(image => <img class="icon" src={image} alt="a" />)}
          {/* <div>
            <img class="icon" src="Images/html.png" />
          </div>
          <div>
            <img class="icon" src="Images/css.png" />
          </div>
          <div>
            <img class="icon" src="Images/javascript.png" />
          </div>
          <div>
            <img class="icon" src="Images/nodejs.png" />
          </div>
          <div>
            <img class="icon" src="Images/jquery.png" />
          </div>
          <div>
            <img class="icon" src="Images/bootstrap.png" />
          </div>
          <div>
            <img class="icon" src="Images/mongodb.png" />
          </div>
          <div>
            <img class="icon" src="Images/react.png" />
          </div>
          <div>
            <img class="icon" src="Images/redux.png" />
          </div>
          <div>
            <img class="icon" src="Images/git.png" />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Skills;
