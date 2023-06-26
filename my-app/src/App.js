// import logo from './logo.svg';
import './App.css';
// import {a,r} from './test';
// console.log(a,r);

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/* <Navbar title = "TextUtils"/> */}
    <Navbar/>
    <div className="container">
      <TextForm heading = "Enter the text to analyze below"/>
    </div>
    </>
  );
}

export default App;
