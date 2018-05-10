import React, { Component } from 'react';

import Navbar from './Navbar';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
