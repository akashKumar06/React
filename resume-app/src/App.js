import React,{useState} from 'react';

import "./App.css";
import './styles/skills.css';
import data from "./data/data";

import Skill from "./components/Skill";
import Header from "./components/Header";
import Main from './components/Main'
import CloseButton from "./components/CloseButton";
import Form from './components/Form';
import ContactList from './components/ContactList';
import dummyContacts from "./data/contacts";

function App() {

  const [contacts,setContacts] = useState(dummyContacts);

  function handleSubmit(contact){
    setContacts((prevContacts) => {
      return [...prevContacts,contact];
    });
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
      <ContactList contacts={contacts}/>
      <CloseButton onClose={handleClose}/>
    </div>
  );
}

export default App;
