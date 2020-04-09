import React from 'react';
import cn from 'classnames';
const Input = ({ input, meta, label, ...props }) => {
  const id = input.name;
  const error = meta.touched && meta.error;

  const classes = cn('form-field', {
    error,
  });

  return (
    <div className={classes}>
      <div className='form-field__control'>
        <input
          type='text'
          id={id}
          className='form-field__input'
          placeholder=' '
          {...input}
          {...props}
        />
        <label htmlFor={id} className='form-field__label'>
          {label}
        </label>
        <div className='form-field__bar'></div>
      </div>
      <span className='form-field__error'>
        {meta.touched && meta.error && (
          <span className='form-field__error-text'>{meta.error}</span>
        )}
      </span>
    </div>
  );
};

export default Input;
