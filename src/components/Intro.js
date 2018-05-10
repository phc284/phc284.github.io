import React, { Component } from 'react';

export class Intro extends Component {
  render() {
    return (
      <div className="container-fluid d-flex align-items-center justify-content-center text-center river">
        <div className="jumbotron intro">
          <h1>Peter Choi</h1>
          <hr />
          <h3>Just a web developer looking for some chicken fingers</h3>
        </div>
      </div>
    );
  }
}

export default Intro;
