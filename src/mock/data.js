import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'tree.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'notubereats.png',
    title: 'Not Uber Eats || Full Stack',
    info: 'A list of local restaurants in South Africa that offer their own delivery services or pick up. Support local instead of letting delivery apps take 30% of every order! Makes use of a low-code content managment system called Contentful. Open Source.',
    info2:
      'Tech stack: React, Gatbsyjs, GraphQl, Bootstrap, Sass, Netfliy, Contentful CMS, Google Analytics, Git.',
    url: 'https://www.not-ubereats.co.za/',
    repo: 'https://github.com/Jake-Owen95/not-ubereats', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PMS.png',
    title: 'ProjectMS || Back End',
    info: 'A project management system designed to automate some of the data storing, retrieving and editing for company projects. Built all the crud operations as well as user authentication with admin/user login. Writes data to a text file but will be moving to a SQL database',
    info2: 'Tech Stack: Python moved to Java, Git.',
    url: 'https://github.com/Jake-Owen95/ProjectManagementSystem',
    repo: 'https://github.com/Jake-Owen95/ProjectManagementSystem',
  },
  {
    id: nanoid(),
    img: 'weatherapp.png',
    title: 'Weather App || Front End',
    info: 'A weather app I built using the open weather app api. This application pulls data from the api and displays it in the UI showing information like temperature, cloud cover and providing a representative image.',
    info2: 'Tech Stack: HTML, CSS, Javascript, bootstrap, Git.',
    url: 'https://jake-owen95.github.io/weather-app/',
    repo: 'https://github.com/Jake-Owen95/weather-app',
  },
];

// SKILLS DATA
export const skillsData = {
  img: 'node.png',
  img1: 'python.png',
  img2: 'mySql.png',
  img3: 'html.png',
  img4: 'contentful.png',
  img5: 'javascript.png',
  img6: 'rails.png',
  img7: 'gatsby.png',
  img8: 'java.png',
  img9: 'react.png',
  img10: 'ganalytics.png',
  img11: 'git.png',
  img12: 'netlify.png',
};

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jakejohnowen@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jake-owen-196960a8/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Jake-Owen95',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // enable/disable GitHub stars/fork buttons
};
