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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  academic,
  web_icon,
  wordpress,
  eventapp,
  days,
  todo,
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
    id: "contact",
    title: "Contact",
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
    title: "Web Designer",
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Development Consultant",
    company_name: "Freelance Project",
    icon: web_icon,
    iconBg: "#D1E8E2",
    date: "Nov 2020 - Jan 2022",
    points: [
      "Provided web consulting services to small businesses, focusing on performance optimization and user interface improvements.",
      "Designed responsive web layouts using HTML, CSS, and modern JavaScript practices.",
      "Assisted clients in deploying their websites using hosting platforms and provided documentation for future updates.",
      "Advised on SEO basics and web accessibility to improve reach and user experience.",
      "Collaborated with clients to gather requirements and deliver customized web solutions tailored to their needs.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Thesis Project - MERN App",
    icon: academic,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Jul 2025",
    points: [
      "Developed and deployed a full-stack web application using the MERN stack for managing user-authenticated events.",
      "Implemented user authentication with JWT and bcrypt, handling secure sessions via cookies.",
      "Used Chart.js for dynamic data visualization and implemented filters to improve user experience.",
      "Tested REST APIs using Postman, validating endpoints for performance and correctness.",
      "Ensured scalability and performance through modular code structure and clean API design.",
    ],
  },
  {
    title: "E-commerce Developer",
    company_name: "Online Store",
    icon: wordpress,
    iconBg: "#FDF0E0",
    date: "Jul 2025 - Present",
    points: [
      "Developing an online store using WordPress and WooCommerce to manage product listings, payments, and customer accounts.",
      "Customized store functionality with plugins and tailored themes to meet specific client requirements.",
      "Integrated secure payment gateways, including PayPal and Stripe, for seamless transactions.",
      "Optimized site performance with caching tools and responsive design techniques.",
      "Configured inventory, shipping, and tax settings to ensure operational readiness.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Event App",
    description:
      "A full-stack web application where users can create, manage, and track events. Includes user authentication, real-time statistics, a recommendation system, and web scraping features to enrich event data and enhance user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
    ],
    image: eventapp,
    source_code_link: "https://github.com/mapper895/Prototipo-tesis",
    demo: "https://tesis-app-7sij.onrender.com/",
  },
  {
    name: "Days",
    description:
      "A dynamic and visually rich website built to explore creative front-end techniques. Features smooth animations, interactive elements, and mouse-based effects to enhance user engagement.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: days,
    source_code_link: "https://github.com/",
    demo: "https://distracted-murdock-1c4d26.netlify.app/index.html",
  },
  {
    name: "To-do List",
    description:
      "A straightforward web application that allows users to create, edit, and delete tasks. Designed with a clean interface to help users organize their daily activities efficiently.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/",
    demo: "https://mapper-todo-list.netlify.app/",
  },
];

const socials = [
  { title: "LinkedIn", url: "https://linkedin.com/in/miguelperez02" },
  { title: "Instagram", url: "https://instagram.com/miguelperez.02" },
  { title: "Github", url: "https://github.com/mapper895" },
];

export { services, technologies, experiences, testimonials, projects, socials };
