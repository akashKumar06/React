import React,{useState} from 'react';

const initialValue = {
  schoolName: '',
  degree:'',
  cgpa:''
}
function Education({onSubmit}) {
  const [education,setEducation] = useState(initialValue);

  function handleChange(event){
    setEducation({
      ...education,
      id: Math.floor(Math.random()*100 + 1),
      [event.target.id]: event.target.value,
    })
  }


  function handleSubmit(event){
    event.preventDefault();

    onSubmit(education);

    setEducation(initialValue);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Education</legend>
          <input value={education.schoolName} type="text" id="schoolName"  placeholder="School Name" onChange={handleChange} />
          <input value={education.degree} type="text" id="degree"  placeholder="Degree" onChange={handleChange}/>
          <input value={education.cgpa} type="text" id="cgpa"  placeholder="CGPA" onChange={handleChange}/>
          <button>Add Education</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Education;
