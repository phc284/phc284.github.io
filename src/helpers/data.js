import emailImg from '../images/contact/email.png';
import linkedImg from '../images/contact/linkedin.png';
import githubImg from '../images/contact/github-contact.png';

export const projects = [
  {
    name: 'ratemyoreo',
    description: 'Rate Your Favorite Oreo Flavors',
    link: 'http://github.com/oreo',
    construction: true
  },
  {
    name: 'Advocacy App',
    description:
      'Cross-platform app to streamline donation process for local homeless non-profit charities',
    link: 'http://mhfprojects.com/',
    construction: true,
    volunteer: true
  },
  {
    name: 'Dallas Cowboys Resource',
    description: 'Compilation of news sources for Dallas Cowboys Fans',
    link: 'http://github.com/cowboys',
    construction: true
  },
  {
    name: 'NewNews',
    description: 'Data visualization of global news from around the world',
    link: 'https://github.com/phc284/newnews',
    construction: false
  },
  {
    name: 'Scream Machine',
    description: 'Gag app to measure screaming',
    link: 'http://scream-machine.herokuapp.com/',
    construction: false
  },
  {
    name: 'GetMeAGift',
    description:
      'Personal wishlist application to share with friends or family',
    link: 'http://getmea.gift/',
    construction: false
  }
];

export const contactList = [
  {
    name: 'Email',
    link: 'mailto:phc284@gmail.com',
    photo: emailImg
  },
  {
    name: 'LinkedIn',
    link: 'http://linkedin.com/in/phc284',
    photo: linkedImg
  },
  {
    name: 'GitHub',
    link: 'http://github.com/phc284',
    photo: githubImg
  }
];
