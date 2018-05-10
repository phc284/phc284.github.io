import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <div class="container-fluid text-center contact" id="contact">
        <h2>Get In Touch</h2>
        <div class="contact-grid">
          <a target="_blank" href="mailto:phc284@gmail.com">
            <img class="contact-icon" src="Images/email.png" />>
          </a>
          <a target="_blank" href="http://linkedin.com/in/phc284">
            <img class="contact-icon" src="Images/linkedin.png" />>
          </a>
          <a target="_blank" href="http://github.com/phc284">
            <img class="contact-icon" src="Images/github-contact.png" />>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
