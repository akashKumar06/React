import React,{useState} from 'react';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Tasks from './components/Tasks';

const DUMMY_TASKS = [
  {id:'1',task:"Kuch nahi"},
]

function App() {
  const [tasks,setTask] = useState(DUMMY_TASKS);

  const getData = (value) => {
    setTask((prevTask)=>{
      return[value,...prevTask]
    })
  }
  return (
    <>
    <Navbar/>
    <Form onSaveInputData={getData}/>
    <Tasks items={tasks}/>
    </>
  )
}

export default App;
