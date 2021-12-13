import React, { useState } from "react";

const Forms = () => {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your first name:
        <input 
          type="text" 
          name="firstname" 
          value={inputs.firstname || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your last name:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
}

export default Forms