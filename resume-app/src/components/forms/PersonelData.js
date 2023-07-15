import React,{useState} from 'react';


function PersonelData({onSubmit}) {
    const [personelData,setPersonelData] = useState({});
    function handleChange(event){
        setPersonelData({
            ...personelData,
            id: Math.floor(Math.random()*100 + 1),
            [event.target.id]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        onSubmit(personelData);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personel Details</legend>
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
            <button>Add</button>
          </div>
          
        </fieldset>
      </form>
    </div>
  );
}

export default PersonelData;
