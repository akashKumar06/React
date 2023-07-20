import React,{useState} from 'react';

import "./App.css";
import './styles/skills.css';
// import data from "./data/data";

// import Skill from "./components/Skill";
import Header from "./components/Header";
import Main from './components/Main'
// import CloseButton from "./components/CloseButton";
// import Form from './components/Form';
// import ContactList from './components/ContactList';
// import dummyContacts from "./data/contacts";
import ResumeData from './data/ResumeData';
import PersonelData from './components/forms/PersonelData';
import Skills from './components/forms/Skills';
import Skill from './components/Skill';
import Education from './components/forms/Education';
function App() {

  const [personelInfo,setPersonelInfo] = useState(ResumeData.personelInfo);

  const[skillData,setSkillData] = useState(ResumeData.skills);

  function handleDataSubmit(data){
    setPersonelInfo(data);
  }

  function handleSkillsSubmit(data){
    setSkillData((prevData) => ([...prevData,data]));
    console.log(skillData);
  }

  function handleEducationSubmit(){

  }

  return (
    <div className='container'>
      <Header name={personelInfo.name}/>
      <Main data={personelInfo}/>
      <Skill skills={skillData}/>
      <PersonelData onDataSubmit={handleDataSubmit}/>
      <Skills onSkillsSubmit={handleSkillsSubmit}/>
      {/* // <Education onEducationSubmit={handleEducationSubmit}/> */}
      {/* <h2>What I Do</h2>
      <div className='skills'>
        {data.skills.map((skill) => (
          <Skill {...skill}></Skill>
        ))}
      </div> */}
      {/* <Form onSubmit={handleSubmit}/> */}
      {/* <div>
        {education.map((edu) => (
          <div key={edu.id}>
            <h3>School Name: {edu.schoolName}</h3>
          </div>
        ))} */}
      {/* </div> */}
      {/* <div>{personelInfo.name}</div> */}
      {/* <ContactList contacts={contacts}/> */}
      {/* <CloseButton onClose={handleClose}/> */}
    </div>
  );
}

export default App;
