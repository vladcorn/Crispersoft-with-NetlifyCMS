import React from 'react';
import { navigate } from 'gatsby';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';

import { Input, Textarea } from '../atoms';
import { sendContactsData } from '../../api/contacts';

// eslint-disable-next-line
const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validate(values) {
  const { email, name } = values;

  const errors = {};

  if (!name) {
    errors.name = 'Name is required';
  } else if (name.length < 3) {
    errors.name = 'Name should be minimum 3 character';
  }

  if (!email) {
    errors.email = 'Email is required';
  }

  if (email && !email.match(emailRegexp)) {
    errors.email = 'E-mail is wrong';
  }

  return errors;
}

async function onSubmit(data) {
  try {
    await sendContactsData(data);
    navigate('/thanks');
  } catch (error) {}
}

const focusOnErrors = createDecorator();

const ContactsForm = () => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      decorators={[focusOnErrors]}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name='name'>
            {({ input, meta }) => (
              <Input input={input} meta={meta} label='Name' maxLength={20} />
            )}
          </Field>
          <Field name='email'>
            {({ input, meta }) => (
              <Input input={input} meta={meta} label='E-mail' maxLength={50} />
            )}
          </Field>
          <Field name='message'>
            {({ input, meta }) => (
              <Textarea
                input={input}
                meta={meta}
                label='Message'
                maxLength={2000}
              />
            )}
          </Field>
          <button
            type='submit'
            className='btn link uppercase link-wrapper'
            disabled={submitting}
          >
            <span className='link-line'></span>
            {submitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      )}
    />
  );
};

export default ContactsForm;
