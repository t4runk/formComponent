import React from 'react';
import   Form  from './components/forms/Form';
import Input  from './components/input/Input';
import Button  from './components/Button';
import { useFormContext } from './components/context/FormContext';
import"./App.css"
 const App = () => {
  const { formValues } = useFormContext();
  
  const handleSubmit = () => {
    // handle form submission logic here
    console.log('Form submitted!');
    console.log(formValues);

  };

  return (
    <div className='App'>
  
      <Form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <Input name="username" placeholder="Username" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button>Submit</Button>
      </Form>
    
    </div>
  
  );
};
export default App;