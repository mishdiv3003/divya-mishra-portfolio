let timelineElements = [
  {
    id: 1,
    title: "Sr. Application Developer",
    company: "Accenture",
    description:
      "Crafting engaging web experiences. Working with Micro-frontends with React-redux, collaborating with cross-functional teams. Optimizing application performance and user experience by implementing efficient and reusable frontend components",
    buttonText: "Company",
    date: "April 2022 - present",
    icon: "work",
    url: "https://www.accenture.com/in-en",
    multi: false
  },
  {
    id: 2,
    title: "Technology Analyst",
    company: "Infosys Ltd.",
    description:
      "Worked on client facing web applications, in React and Angular. Collaborated with cross-functional teams like Product Owners, UX designers, back-end developers, and QA engineers to take wireframes from conception to unit-tested and production-ready user interfaces in Waterfall and Agile Scrum projects.",
    buttonText: "Company",
    date: "Dec 2018 - April 2022",
    icon: "work",
    url: "https://www.infosys.com/",
    multi: true,
    subRoles:[
      {
        id: 2.1,
        title: "Sr. Systems Engineer",
        company: "Infosys Ltd.",
        description:
          "Developed & maintained high-traffic user interfaces using React & TypeScript. Collaborated with Back-End developers for seamless integration ",
        buttonText: "Company",
        date: "Jan 2021 - Jan 2022",
        icon: "work",
        url: "https://www.infosys.com/",
      },
      {
        id: 2.2,
        title: "Systems Engineer",
        company: "Infosys Ltd.",
        description:
          "Created a reusable component library in React Native. Developed a mobile application to provide an interactive learning experience for customers.",
        buttonText: "Company",
        date: "Dec 2018 - Jan 2021",
        icon: "work",
        url: "https://www.infosys.com/",
      },
    ]
  },
  {
    id: 3,
    title: "Uttar Pradesh Technical University",
    location: "Lucknow, India",
    description:
      "Bachelor of Technology (Hons.) in Electronics & Communications Engineering with 76%.",
    buttonText: "College Projects",
    date: "Jul 2012 - Jun 2016",
    icon: "school",
  },
];

export default timelineElements;
