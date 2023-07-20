import React,{useState} from 'react';

import "./App.css";
import './styles/skills.css';

import Header from "./components/Header";
import Main from './components/Main'
import ResumeData from './data/ResumeData';
import PersonelData from './forms/PersonelData';
import SkillForm from './forms/SkillForm';
import Skill from './components/Skill';
import EducationForm from './forms/EducationForm';
import Education from './components/Education';
function App() {

  const [personelInfo,setPersonelInfo] = useState(ResumeData.personelInfo);
  const[skillData,setSkillData] = useState(ResumeData.skills);
  const[educationData,setEducationData] = useState(ResumeData.education);

  function handleDataSubmit(data){
    setPersonelInfo(data);
  }

  function handleSkillsSubmit(data){
    setSkillData((prevData) => ([...prevData,data]));
    console.log(skillData);
  }

  function handleEducationSubmit(data){
    setEducationData((prevData) => ([...prevData,data]));
  }

  return (
    <div className='container'>
      <Header name={personelInfo.name}/>
      <Main data={personelInfo}/>
      <Skill skills={skillData}/>
      <Education education={educationData} />
      <PersonelData onDataSubmit={handleDataSubmit}/>
      <SkillForm onSkillsSubmit={handleSkillsSubmit}/>
      <EducationForm onEducationSubmit={handleEducationSubmit}/>
    </div>
  );
}

export default App;
