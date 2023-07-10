import "./App.css";
import './styles/skills.css';
import data from "./data/data";

import Skill from "./components/Skill";
import Header from "./components/Header";
import Main from './components/Main'

function App() {
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
    </div>
  );
}

export default App;
