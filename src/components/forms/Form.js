import React from 'react';
import { useFormHandling } from '../hooks/FormHandling';

export const Form = ({ children, onSubmit }) => {
  const { values, errors, handleChange, handleSubmit } = useFormHandling({ firstName: '', lastName: '', email: '' },
     { firstName: { required: true }, lastName: { required: true }, email: { required: true } })
  
console.log(values,errors);


  return (<form onSubmit={handleSubmit(onSubmit)}>{React.Children.map(children,child=>{
    return React.cloneElement(child,{values,errors,handleChange});
  })}</form>);
};
// export default Form;
