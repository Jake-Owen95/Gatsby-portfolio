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
    img: 'PMS.jpg',
    title: 'ProjectMS || Back End',
    info: 'A project management system designed to automate some of the data storing, retrieving and editing for company projects. Built all the crud operations as well as user authentication with admin/user login. Data managed using a mySQL database. (Console application - live button goes to repo.)',
    info2: 'Tech Stack: Python moved to Java, Git.',
    url: 'https://github.com/Jake-Owen95/ProjectManagementSystem',
    repo: 'https://github.com/Jake-Owen95/ProjectManagementSystem',
  },
  {
    id: nanoid(),
    img: 'weatherapp.png',
    title: 'Weather App || Front End',
    info: 'A weather app I built using the open weather app api. This application pulls data from the api based on users location input. It then displays the weather for that area showing information like temperature, cloud cover and even providing a unique and representative image for those conditions.',
    info2: 'Tech Stack: HTML, CSS, Javascript, bootstrap, Git.',
    url: 'https://jake-owen95.github.io/weather-app/',
    repo: 'https://github.com/Jake-Owen95/weather-app',
  },
  {
    id: nanoid(),
    img: 'machineLearningProjects.png',
    title: 'Machine Learning || Back End',
    info: 'Various machine learning projects using polynomial regression, scatter plots and the k means algorithm. Analyzing the popular iris data set as well as creating scatter plots on diabetes.',
    info2: 'Tech Stack: Python, numpy, sklearn, matplotlib.',
    url: 'https://github.com/Jake-Owen95/MachineLearningProjects',
    repo: 'https://github.com/Jake-Owen95/MachineLearningProjects',
  },
];

// SKILLS DATA
export const skillsData = {
  img: 'npm.png',
  img1: 'python.png',
  img2: 'mySql.png',
  img3: 'html.png',
  img4: 'contentful.png',
  img5: 'javascript.png',
  img6: 'rails.png',
  img7: 'gatsby.png',
  img8: 'java.png',
  img9: 'react.png',
  // img10: 'ganalytics.png',
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
