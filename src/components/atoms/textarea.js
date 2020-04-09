import React from 'react';
import ResizeTextarea from 'react-textarea-autosize';

const Textarea = ({ input, meta, label, ...props }) => {
  return (
    <div className='form-field'>
      <div className='form-field__control'>
        <ResizeTextarea
          id='message'
          className='form-field__textarea'
          placeholder=' '
          {...input}
          {...props}
        />
        <label htmlFor='message' className='form-field__label'>
          {label}
        </label>
        <div className='form-field__bar'></div>
      </div>
      {meta.touched && meta.error && (
        <span className='form-field__error'>{meta.error}</span>
      )}
    </div>
  );
};

export default Textarea;
