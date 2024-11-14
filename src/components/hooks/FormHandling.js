import { useState } from "react"
export const useFormHandling = (initialValues={},validations={})=>{
const [values,setValues]=useState(initialValues);
const [errors,setErrors]=useState({});

const handleChange=(name,value)=>{
setValues(prevValues=>({...prevValues,[name]:value}))
}

const handleValidation = ()=>{

const newErrors={};
Object.keys(validations).forEach(field=>{
    if(validations[field].required && [values[field]]){
        newErrors[field]=`${field} is required`;
    }  
});
setErrors(newErrors);
return Object.keys(newErrors).length===0;

}

const handleSubmit=(callback)=>(e)=>{
e.preventDefault();
if(handleValidation()){
    callback(values);
}
};

return {values,errors,handleChange,handleSubmit};
};
