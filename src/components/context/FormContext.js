import React, { createContext, useContext, useState } from 'react';

// Create the Form context
const FormContext = createContext();

export function useFormContext() {
  return useContext(FormContext);
}

// FormProvider component to manage the form state
export const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const setFieldValue = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setFieldError = (name, error) => {
    setFormErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateField = (name, value) => {
    let error = '';
    if (!value) {
      error = `${name} is required`;
    }
    setFieldError(name, error);
  };

  const validateForm = () => {
    let errors = {};
    Object.keys(formValues).forEach((field) => {
      if (!formValues[field]) {
        errors[field] = `${field} is required`;
      }
    });
    setFormErrors(errors);
    return errors;
  };

  return (
    <FormContext.Provider
      value={{
        formValues,
        formErrors,
        setFieldValue,
        setFieldError,
        validateField,
        validateForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
