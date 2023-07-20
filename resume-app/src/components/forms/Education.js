import React from "react";

function Education() {
  return (
    <form>
      <fieldset>
        <legend>Education</legend>
        <div>
          <label htmlFor="name">School/University Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="course">Course Name</label>
          <input type="text" id="course" name="course" />
        </div>
        <div>
          <label htmlFor="year">Course Duration</label>
          <input type="text" id="year" name="year" />
        </div>
        <div>
          <button>Add Education</button>
          <button>Add More</button>
        </div>
      </fieldset>
    </form>
  );
}

export default Education;

// const initialValue = {
//   schoolName: '',
//   degree:'',
//   cgpa:''
// }
// function Education({onSubmit}) {
//   const [education,setEducation] = useState(initialValue);

//   function handleChange(event){
//     setEducation({
//       ...education,
//       id: Math.floor(Math.random()*100 + 1),
//       [event.target.id]: event.target.value,
//     })
//   }

//   function handleSubmit(event){
//     event.preventDefault();

//     onSubmit(education);

//     setEducation(initialValue);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <legend>Education</legend>
//           <input value={education.schoolName} type="text" id="schoolName"  placeholder="School Name" onChange={handleChange} />
//           <input value={education.degree} type="text" id="degree"  placeholder="Degree" onChange={handleChange}/>
//           <input value={education.cgpa} type="text" id="cgpa"  placeholder="CGPA" onChange={handleChange}/>
//           <button>Add Education</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export default Education;
