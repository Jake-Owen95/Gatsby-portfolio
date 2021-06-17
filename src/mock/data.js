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
  img: 'padang.jpg',
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
    title: 'Not Uber Eats',
    info: '',
    info2: '',
    url: 'https://www.not-ubereats.co.za/',
    repo: 'https://github.com/Jake-Owen95/not-ubereats', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PMS.jpg',
    title: 'Project Management System',
    info: 'A system designed to automate some of the data storing, retrieving and editing for company projects. I built this in Python and then in Java using a mySql database.',
    info2: '',
    url: '',
    repo: 'https://github.com/Jake-Owen95/ProjectManagementSystem', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'oldPortfolio.png',
    title: 'Old Portfolio Site',
    info: 'This was my last portfolio site I built using HTML, CSS and JavaScript. I did not design it to be mobile friendly and struggled to make it responsive. So I decided I would start this new portfolio with mobile first in mind. ',
    info2: '',
    url: 'https://jake-owen95.github.io/Portfolio/index.html',
    repo: 'https://github.com/Jake-Owen95/Portfolio', // if no repo, the button will not show up
  },
];

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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
