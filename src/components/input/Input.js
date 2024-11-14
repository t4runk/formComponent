import React from 'react';


 const Input = ({ name,label, type = 'text', values,errors,handleChange }) => (
  <div>
  {console.log("VALUES IN INPUT",values)}

  <label htmlFor={name}>{label}</label>
  <input
    type={type}
    id={name}
    name={name}
    value={values[name] || ''}
  
    onChange={(e)=>handleChange(name,e.target.value)}
    style={{display:'block',marginTop:'0.5rem'}}
  />
  {errors[name] && <div style={{color:'red'}}>{errors[name]}</div>}
</div>
 )
 

export default Input