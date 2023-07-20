import React, { useState } from "react";

function Skills({onSkillsSubmit}) {
  const [data, setData] = useState({});

  function handleChange(e) {
    setData({
      ...data,
      id: Math.floor(Math.random() * 10 + 1),
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    onSkillsSubmit(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Skills</legend>
        <div>
          <label htmlFor="skillName">Skill Name</label>
          <input
            type="text"
            id="skillName"
            name="skillName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tech">Technology Used</label>
          <input type="text" id="techUsed" name="techUsed" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="desc">Decription</label>
          <input type="text" id="desc" name="desc" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Add Skills</button>
          <button type="button">Add More</button>
        </div>
      </fieldset>
    </form>
  );
}

export default Skills;
