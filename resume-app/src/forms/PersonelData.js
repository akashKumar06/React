import React, { useState } from "react";

function PersonelData({ onDataSubmit }) {
  const [data, setData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    onDataSubmit(data);
  }

  function handleChange(e) {
    setData({...data, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Personel Data</legend>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phone">Phone No.</label>
          <input type="text" id="phone" name="phone" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Add Personel Data</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PersonelData;