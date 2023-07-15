import React, { useState } from "react";

import "../styles/Form.css";

function Form({ onSubmit }) {
  const [contact, setContact] = useState({});

  function handleSubmit(e) {
    console.log("handle submit in form executed");
    e.preventDefault();
    onSubmit(contact);
  }
  function handleClick(e) {
    console.log("handle click in form executed");
    e.preventDefault();
    setContact({
      id: Math.floor(Math.random() * 100 + 1),
      [e.target[0].id]: e.target[0].value,
      [e.target[1].id]: e.target[1].value,
      [e.target[2].id]: e.target[2].value,
      [e.target[3].id]: e.target[3].value,
      [e.target[4].id]: e.target[4].value,
      [e.target[5].id]: e.target[5].value,
    });
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Contact me</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone No</label>
          <input type="number" id="phone" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="prof">Profession</label>
          <select name="profession" id="profession">
            <option value="Student">Student</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="ReactJS Developer">ReactJS Developer</option>
            <option value="Angular Developer">Angular Developer</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
