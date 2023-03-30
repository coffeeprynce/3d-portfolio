import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    swolemate,
    techblog,
    passwordgen,
  } from "../assets";
  
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
      id: "links",
      title: "Links",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  
  
  const projects = [
    {
      name: "Swolemate",
      description:
        "A user friendly workout application that functions with the help of the exerciseDB.",
      tags: [
        
      ],
      image: swolemate,
      source_code_link: "https://github.com/MarcusC811/Swolemate",
    },
    {
      name: "Tech Blog",
      description:
        "A beginner friendly web blog forum for aspiring software developers.",
      tags: [
     
      ],
      image: techblog,
      source_code_link: "https://github.com/coffeeprynce/techblog",
    },
    {
      name: "Password Generator",
      description:
        "A simple but useful password generator for when you have run out of ideas.",
      tags: [

      ],
      image: passwordgen,
      source_code_link: "https://github.com/coffeeprynce/passwordgenerator",
    },
  ];
  
  export { services, technologies, projects };