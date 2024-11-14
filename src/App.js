import React from 'react';
import   {Form}  from './components/forms/Form';
import Input  from './components/input/Input';
import Button  from './components/Button';
import { useFormHandling } from './components/hooks/FormHandling';

import"./App.css"
 const App = () => {
  
  const handleUserSubmit = (values) => {
    // handle form submission logic here
    console.log('Form submitted!',values);
  

  };

  return (
    <div className='App'>
  
      <Form onSubmit={(e) => handleUserSubmit(e)}>
        <h1>Registration Form</h1>
        <Input name="firstName" label="First Name"/>
        <Input name="lastName" label="Last Name"/>
        <Input name="email" label="Email" type="email"/>
        <Button>submit</Button>
      </Form>
    
    </div>
  
  );
};
export default App;