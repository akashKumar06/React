import React,{useState} from 'react';

import "./App.css";
import './styles/skills.css';
import data from "./data/data";

import Skill from "./components/Skill";
import Header from "./components/Header";
import Main from './components/Main'
import CloseButton from "./components/CloseButton";
import Form from './components/Form';
// import ContactList from './components/ContactList';
// import dummyContacts from "./data/contacts";

function App() {

  const [personelInfo,setPersonelInfo] = useState({});
  const [education, setEducation] = useState([]);

  function handleSubmit(data,title){
    if(title === 'personelInfo'){
      setPersonelInfo(data);
    }
    else if(title === 'education'){
      setEducation([...education,data]);
      console.log(education);
    }
  }

  function handleClose(event){
    alert("Tab will close");
    event.view.close();
  }

  return (
    <div className='container'>
      <Header />
      <Main/>
      <h2>What I Do</h2>
      <div className='skills'>
        {data.skills.map((skill) => (
          <Skill {...skill}></Skill>
        ))}
      </div>
      <Form onSubmit={handleSubmit}/>
      <div>
        {education.map((edu) => (
          <div key={edu.id}>
            <h3>School Name: {edu.schoolName}</h3>
          </div>
        ))}
      </div>
      <div>{personelInfo.name}</div>
      {/* <ContactList contacts={contacts}/> */}
      <CloseButton onClose={handleClose}/>
    </div>
  );
}

export default App;
