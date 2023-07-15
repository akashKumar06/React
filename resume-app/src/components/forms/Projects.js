import React, { useState } from "react";
function Projects() {
  const [project, setProject] = useState({});
  function handleChange(e) {
    setProject({ ...project, [e.target.id]: e.target.value });
  }
  return (
    <>
      <input
        type="text"
        placeholder="Project Name"
        id="projectName"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Technology Used"
        id="techUsed"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        id="desc"
        onChange={handleChange}
      />
    </>
  );
}

export default Projects;
