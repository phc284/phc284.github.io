import React, { Component } from 'react';

import { contactList } from '../helpers/data';

const Contacts = contactList.map((item, index) => (
  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
    <img className="contact-icon" src={item.photo} alt={item.name} />
  </a>
));

export class Contact extends Component {
  render() {
    return (
      <div className="container-fluid text-center contact" id="contact">
        <h2>Get In Touch</h2>
        <div className="contact-grid">{Contacts}</div>
      </div>
    );
  }
}

export default Contact;
