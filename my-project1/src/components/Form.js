import React, { useState } from "react";

const Form = (props) => {
  const [inputData, setInputData] = useState("");

  const inputHandler = (event) => {
    setInputData(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const input = {
        id: Math.round((Math.random() + 1)*10),
        task: inputData
    }
    props.onSaveInputData(input);
  };

  return (
    <div className="container mx-auto mt-5">
      <form className="border rounded p-3" onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Enter Task</label>
          <input type="text" className="form-control" onChange={inputHandler} />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
