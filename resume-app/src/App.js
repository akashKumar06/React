import "./App.css";

import data from './data/data';

import image from './data/img.jpg'

import Skill from './components/Skill';

function App() {
  
  return (
    <>
    <header>
      <nav>
        <div><b>Akash</b> Kumar</div>
        <ul>
          <li>About Me</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Extra</li>
        </ul>
      </nav>
    </header>
    <main>
      <img src={image} alt="" />
      <div>
        <h3>Frontend-Developer</h3>
        <h1>Akash Kumar</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis necessitatibus quis modi blanditiis labore est similique delectus eaque. Ratione non, quod beatae voluptates eius alias vero quae? Distinctio, expedita nostrum?</p>
        <div>
          <button>Download CV</button>
          <button>Contat</button>
        </div>
      </div>
    </main>
    <div>
      <h2>What I Do</h2>
      {data.skills.map(skill => <Skill {...skill}></Skill>)}
    </div>
    </>
  );
}

export default App;
