import "./App.css";
import './styles/skills.css';
import data from "./data/data";

import Skill from "./components/Skill";
import Header from "./components/Header";
import Main from './components/Main'
import CloseButton from "./components/CloseButton";

function App() {
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
      <div className='experience'>
        
      </div>
      <CloseButton onClose={handleClose}/>
    </div>
  );
}

export default App;
