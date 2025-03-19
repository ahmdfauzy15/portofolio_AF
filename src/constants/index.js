import {
    mobile,
    backend,
    web,
    // javascript,
    // html,
    // css,
    // reactjs,
    // redux,
    // tailwind,
    // git,
    // threejs,
    // laravel,
    // ollama,
    // mongodb,
    // codeig,
    // sql,
    // node,
    // next,
    // python,
    // ionic,
    
  } from "../assets";
  import da from '../assets/DA.png'
  import halosani from '../assets/halosani.png'
  import indomonang from '../assets/indomonang.png'
  import iqra from '../assets/iqra.png'
  import revouse from '../assets/revouse.png'
  import univ from '../assets/univ.png'
  import tailwind from "../assets/tech/tailwind.png";
  import git from "../assets/tech/git.png";
  import laravel from "../assets/tech/laravel.png";
  import reactjs from "../assets/tech/reactjs.png";
  import node from "../assets/tech/node.png";
  import mongodb from "../assets/tech/mongodb.png";
  import codeig from "../assets/tech/codeig.png";
  import sql from "../assets/tech/sql.png";
  import next from "../assets/tech/next.png";
  import python from "../assets/tech/python.jng";
  import ionic from "../assets/tech/ionic.jng";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Web development",
      icon: web,
    },
    {
      title: "Responsive design",
      icon: mobile,
    },
    {
      title: "web design",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "React.js",
      icon: reactjs,
    },
    {
      name: "Node.js",
      icon: node,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "CodeIgniter",
      icon: codeig,
    },
    {
      name: "MySQL",
      icon: sql,
    },
    {
      name: "Next.js",
      icon: next,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Ionic",
      icon: ionic,
    },
  ];
  
  
  
  const projects = [
    {
      name: "University Project",
      description:
        "The following is an overview of projects within the university, both personally and with lecturers,like hibah dikti, personal project and faculty project, click the button below for further information.",
      tags: [
        {
          name: "#pyhon",
          color: "blue-text-gradient",
        },
        {
          name: "#php",
          color: "green-text-gradient",
        },
        {
          name: "#SVM",
          color: "pink-text-gradient",
        },
      ],
      image: univ,
      demo:'https://sites.google.com/view/af-profile/my-official-project',
    },
    {
      name: "Data Analyst Project",
      description:
        "RevoU Capstone Project Reduced 0.2% Hotel Cancellation Rate Over 6 Months. obtaining analysis results from appropriate raw data so that insights and recommendations can be implemented.",
      tags: [
        {
          name: "#Google Collab",
          color: "blue-text-gradient",
        },
        {
          name: "#Looker Studio",
          color: "green-text-gradient",
        },
        {
          name: "#Big Data",
          color: "pink-text-gradient",
        },
      ],
      image: da,
      demo:'https://drive.google.com/file/d/1htrS--2RS6zEeeYbJHUgUbBvLXuT3hTr/view?usp=sharing',
    },
    {
      name: "NEWS Restfull API Website",
      description:
        "In this project, my team and I created the latest news website where this news uses HTML, CSS, JS, Node JS for the server and there is also Express JS for the API and we use the MySQL relational database.",
      tags: [
        {
          name: "#HTML, CSS , JS",
          color: "blue-text-gradient",
        },
        {
          name: "#restapi",
          color: "green-text-gradient",
        },
        {
          name: "#Node.js, Express.js",
          color: "pink-text-gradient",
        },
      ],
      image: revouse,
      demo:'https://linktr.ee/justaf'
    },
    {
      name: "CNN Final Project",
      description:
        "As a Software Developer at CNN Indonesia, I specialize as a Frontend Developer, responsible for designing, developing, and maintaining web applications, click the button below for further information.",
      tags: [
        {
          name: "#Code Igniter",
          color: "blue-text-gradient",
        },
        {
          name: "Ionic Framework",
          color: "green-text-gradient",
        },
        {
          name: "#Laravel",
          color: "pink-text-gradient",
        },
      ],
      image: iqra,
      demo:'https://drive.google.com/file/d/1JRgOsU4EkbonUDiVu1YjJLVKZ3FLbZQW/view'
    },
    {
      name: "ERP System Testing and Documentation Website",
      description:
        "Ensure the system's functionality, performance, and security meet defined standards. Create detailed documentation related to the testing process and results, click the button below for further information.",
      tags: [
        {
          name: "#ERP",
          color: "blue-text-gradient",
        },
        {
          name: "Next",
          color: "green-text-gradient",
        },
       
      ],
      image: indomonang,
      demo:'https://indomonang-documentation.vercel.app/doc/Vm0wd2QyVkZOVWhTV0d4V1YwZG9WbFl3Wkc5WFZsbDNXa1pPVlUxV2NIcFhhMk0xVmpBeFdHVkdXbFpOYWtFeFdWZDRTMk14V25GVWJHUk9ZV3RhU1ZkV1ZtRlRNbEpYVW01T2FGSnRVbkJXTUZwSFRURmFkR05GWkZwV01VcFlWVzAxUzFsV1NuUmhSemxWVm14d00xcFdXbXRYUjFKSVVteG9hVlpzY0VsV2EyTXhVekpHVjFOdVVsWmlhMHBZV1ZSR1lWbFdVbGhsUjBaWFlrZFNlVll5ZUVOV01rVjNZMFpTVjFaV2NGTmFSRVpEVld4Q1ZVMUVNRDA9'
    },
    {
      name: "Capstone Project HaloSani",
      description:
        "Developed dynamic and responsive frontend interfaces using React.js and Next.js, ensuring optimal user experience across all devices, click the button below for further information.",
      tags: [
        {
          name: "#react",
          color: "blue-text-gradient",
        },
        {
          name: "#restapi",
          color: "green-text-gradient",
        },
        {
          name: "#next",
          color: "pink-text-gradient",
        },
      ],
      image: halosani,
      demo:'https://drive.google.com/drive/folders/1gReUhneLMbOu3VnEXP20PLCNWsKUdrjD?usp=sharing'
    }
    
  ];
  
  export { services, technologies, projects };