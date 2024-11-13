import React, { useEffect } from 'react';
import { useFormContext } from './context/FormContext';

const Field = ({ name, children }) => {
  const { formValues, formErrors, setFieldValue, validateField } = useFormContext();

  useEffect(() => {
    if (formValues[name] === undefined) {
      setFieldValue(name, ''); // initialize field value if not set yet
    }
  }, [formValues, name, setFieldValue]);

  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
    validateField(name, e.target.value);
  };

  return (
    <div>
      {children({
        value: formValues[name] || '',
        error: formErrors[name],
        onChange: handleChange,
      })}
    </div>
  );
};

export default Field;