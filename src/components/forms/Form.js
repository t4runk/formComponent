import React from 'react';


const Form = ({ children, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};
export default Form;