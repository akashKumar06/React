import React from "react";

const Form = () => {
  return (
    <div className="container mx-auto mt-5">
      <form className='border rounded p-3'>
        <div className='mb-3'>
          <label className="form-label">Enter Task</label>
          <input type="text" className="form-control" />
        </div>
        <div>
            <button className='btn btn-primary'>Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
