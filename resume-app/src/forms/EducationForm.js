import React, { useState } from "react";

function Education({onEducationSubmit}) {
  const [data,setData] = useState({});
  
  function handleChange(e){
    setData({...data,[e.target.name]: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    onEducationSubmit({...data, id:Math.floor(Math.random()*10 +1)})
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Education</legend>
        <div>
          <label htmlFor="name">School/University Name</label>
          <input type="text" id="name" name="name" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="course">Course Name</label>
          <input type="text" id="course" name="course" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="year">Course Duration</label>
          <input type="text" id="year" name="year" onChange={handleChange}/>
        </div>
        <div>
          <button type='submit'>Add Education</button>
          <button type='button'>Add More</button>
        </div>
      </fieldset>
    </form>
  );
}

export default Education;