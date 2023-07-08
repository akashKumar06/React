import "./App.css";

// import Name from "./components/Name";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Certificates from "./components/Certificates";
// import CareerObjective from "./components/CareerObjective";
// import Education from "./components/Education";
import EducationSection from "./components/EducationSection";

import Border from './components/Border'
import Component from "./components/Component";

const resume = {
  experience: {
    position: "WEB DEVELOPEMENT INTERN",
    compant: "REFRESH INFRATECH PVT. LTD.",
    year: "OCT 2022 - APR 2023",
    about:
      "Created Api’s for implementing various functionalities such as adding, scheduling, deleting, viewing tasks. Used ExpressJS for backend",
  },
  education: [
    {
      degree: "BCA|Bachelor's of Computer Application",
      college: "ST. XAVIER'S COLLEGE, RANCHI",
      year: "2020 - 2023",
      score: "8.93/10",
    },
    {
      degree: "INTERMEDIATE",
      college: "SURENDRANATH CENTENRAY SCHOOL, RANCHI",
      year: "2017 - 2019",
      board: "CBSE",
      per: "87.60%",
    },
  ],
  projects:[
    {
      title: "OYO HOSTELS",
      techStack:'EXPRESS JS, NODE JS, MONGODB, EXPRESS JS',
      about:
        "Developed a hostel search and add web applications. Designed the backend using express js, mongodb integrated with mongoose. Worked with map box JavaScript library for implementing map features in the website",
    },
  ],
  certificates:[
    {
      cert:'CERTFICATION ON WEB DEVELOPMENT',
      link:'https://www.udemy.com/certificate/UC-1a7a4459-7535-417b-9597-5ddc49736b3a/',
      title:'The Webdeveloper bootcamp 2023',
      org:'UDEMY'
    }
  ]
};

function App() {
  
  return (
    <>
      {/* <CareerObjective></CareerObjective> */}
      {/* <Projects project={resume.projects[0]}></Projects> */}
      <Border>
        <Component></Component>
        {/* <Component backgroundColor='gray'></Component> */}
      </Border>
      <EducationSection education={resume.education}></EducationSection>
      {/* <Skills></Skills> */}
      {/* <Certificates certificate={resume.certificates[0]}></Certificates> */}
    </>
  );
}

export default App;
