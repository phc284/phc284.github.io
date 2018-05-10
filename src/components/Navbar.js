import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div class="container-fluid nav-style">
        <nav class="navbar navbar-expand-md navbar-light bg-blue">
          <a class="navbar-brand" href="#">
            Peter H Choi
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="#navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
