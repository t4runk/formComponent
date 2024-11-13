import React from 'react';
import  Field  from '../Field';

 const Input = ({ name, type = 'text', placeholder }) => {
  return (
    <Field name={name}>
      {({ value, error, onChange }) => (
        <div>
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={`input ${error ? 'input-error' : ''}`}
            required
          />
          {error && <div className="error">{error}</div>}
        </div>
      )}
    </Field>
  );
};

export default Input