import React from "react";
import "../styles/Form.css";

function Form(){

  return(
    <div>
      <form></form>
    </div>
  )

}

export default Form;





























































// import DUMMY_DATA from '../data/DUMMY_DATA';
// import Education from "./forms/Education";
// import Projects from "./forms/Projects";
// import PersonelData from "./forms/PersonelData";
// import Education from './forms/Education';



























// function Form({ onSubmit }) {
  // const [contact, setContact] = useState({});
  // const [personelInfo,setPersonelInfo] = useState(DUMMY_DATA.personelInfo);
  // console.log(personelInfo);
  // const [educationForm, setEducationForm] = useState([]);
  // const [projectForm, setProjectForm] = useState([]);
  // const [status, setStatus] = useState(false);

  // function handleChange(e) {
  //   e.stopPropagation();
  //   console.log(e.target.value);
  // setContact((contact) => {
  //   return {
  //     ...contact,
  //     id: Math.floor(Math.random() * 100 + 1),
  //     [e.target.id]: e.target.value,
  //   };
  // });
  // }

  // function handleClick(e) {
  //   setStatus(true);
  //   console.log("handle click clicked");
  //   console.log(e.target.id);
  //   if (e.target.id === "education") {
  //     setEducationForm(
  //       educationForm.concat(
  //         <Education key={Math.floor(Math.random() * 100 + 1)} />
  //       )
  //     );
  //   } else if (e.target.id === "project") {
  //     setProjectForm(
  //       projectForm.concat(
  //         <Projects key={Math.floor(Math.random() * 100 + 1)} />
  //       )
  //     );
  //   }
  // }

  // const [personelInfo,setPersonelInfo] = useState({});
//   function handlePersonelData(data) {
//     onSubmit(data,'personelInfo');
//   }

//   function handleEducation(data){
//     onSubmit(data,'education');
//   }

//   return (
//     <>
    
//     <div>
//       <PersonelData onSubmit={handlePersonelData}/>
//     </div>
//     <div>
//       <Education onSubmit={handleEducation}></Education>
//     </div>
//     </>
//     // <div>
//     //   <form className="form" onSubmit={handleSubmit}>
//     //     <h2>Resume Data</h2>

//     //     <fieldset>
//     //       <legend>Education</legend>
//     //       <button type="button" onClick={handleClick} id="education">
//     //         Add Education
//     //       </button>
//     //       {status ? educationForm : ""}
//     //     </fieldset>
//     //     <fieldset>
//     //       <legend>Projects</legend>
//     //       <button
//     //         type="button"
//     //         onClick={handleClick}
//     //         id="project"
//     //         name="project"
//     //       >
//     //         Add Projects
//     //       </button>
//     //       {status ? projectForm : ""}
//     //     </fieldset>
//     /*{ <fieldset>
//           <legend>Skills</legend>
//           <button type="button">Add Skills</button>
//         </fieldset>
//         <fieldset>
//           <legend>Experience</legend>
//           <button type="button">Add Experience</button>
//         </fieldset>
//         <fieldset>
//           <legend>Certificates</legend>
//           <button type="button">Add Certificates</button>
//         </fieldset>
//         <div>
//           <label htmlFor="prof">Profession</label>
//           <select name="profession" id="profession" onChange={handleChange}>
//             <option value="Student">Student</option>
//             <option value="Frontend Developer">Frontend Developer</option>
//             <option value="Backend Developer">Backend Developer</option>
//             <option value="ReactJS Developer">ReactJS Developer</option>
//             <option value="Angular Developer">Angular Developer</option>
//           </select>
//         </div> }*/
//     //     <div>
//     //       <button>Submit</button>
//     //     </div>
//     //   </form>
//     // </div>
//   );
// }

// export default Form;
