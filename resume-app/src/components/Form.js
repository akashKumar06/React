import React, { useState } from "react";

import "../styles/Form.css";

function Form({ onSubmit }) {
  const [contact, setContact] = useState({});

  function handleChange(e) {
    e.stopPropagation();
    setContact((contact) => {
      return {
        ...contact,
        id: Math.floor(Math.random() * 100 + 1),
        [e.target.id]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    console.log("handle submit in form executed");
    e.preventDefault();
    onSubmit(contact);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Contact me</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phone">Phone No</label>
          <input type="number" id="phone" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="prof">Profession</label>
          <select name="profession" id="profession" onChange={handleChange}>
            <option value="Student">Student</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="ReactJS Developer">ReactJS Developer</option>
            <option value="Angular Developer">Angular Developer</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
